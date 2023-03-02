# `cloudsearchDomainServiceAccessPolicy` Submodule <a name="`cloudsearchDomainServiceAccessPolicy` Submodule" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudsearchDomainServiceAccessPolicy <a name="CloudsearchDomainServiceAccessPolicy" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy aws_cloudsearch_domain_service_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain_service_access_policy

cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_policy: str,
  domain_name: str,
  id: str = None,
  timeouts: CloudsearchDomainServiceAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.accessPolicy">access_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_policy`<sup>Required</sup> <a name="access_policy" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.accessPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#timeouts CloudsearchDomainServiceAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None,
  update: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#delete CloudsearchDomainServiceAccessPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#update CloudsearchDomainServiceAccessPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain_service_access_policy

cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain_service_access_policy

cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain_service_access_policy

cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference">CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicyInput">access_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicy">access_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeouts"></a>

```python
timeouts: CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference">CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference</a>

---

##### `access_policy_input`<sup>Optional</sup> <a name="access_policy_input" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicyInput"></a>

```python
access_policy_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudsearchDomainServiceAccessPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>, cdktf.IResolvable]

---

##### `access_policy`<sup>Required</sup> <a name="access_policy" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicy"></a>

```python
access_policy: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudsearchDomainServiceAccessPolicyConfig <a name="CloudsearchDomainServiceAccessPolicyConfig" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain_service_access_policy

cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_policy: str,
  domain_name: str,
  id: str = None,
  timeouts: CloudsearchDomainServiceAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.accessPolicy">access_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_policy`<sup>Required</sup> <a name="access_policy" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.accessPolicy"></a>

```python
access_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: CloudsearchDomainServiceAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#timeouts CloudsearchDomainServiceAccessPolicy#timeouts}

---

### CloudsearchDomainServiceAccessPolicyTimeouts <a name="CloudsearchDomainServiceAccessPolicyTimeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain_service_access_policy

cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts(
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#delete CloudsearchDomainServiceAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#update CloudsearchDomainServiceAccessPolicy#update}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#delete CloudsearchDomainServiceAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#update CloudsearchDomainServiceAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference <a name="CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudsearch_domain_service_access_policy

cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudsearchDomainServiceAccessPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>, cdktf.IResolvable]

---



