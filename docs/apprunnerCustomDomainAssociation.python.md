# `apprunnerCustomDomainAssociation` Submodule <a name="`apprunnerCustomDomainAssociation` Submodule" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerCustomDomainAssociation <a name="ApprunnerCustomDomainAssociation" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association aws_apprunner_custom_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_custom_domain_association

apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  service_arn: str,
  enable_www_subdomain: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.serviceArn">service_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.enableWwwSubdomain">enable_www_subdomain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}.

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.serviceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}.

---

##### `enable_www_subdomain`<sup>Optional</sup> <a name="enable_www_subdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.enableWwwSubdomain"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain">reset_enable_www_subdomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enable_www_subdomain` <a name="reset_enable_www_subdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain"></a>

```python
def reset_enable_www_subdomain() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_custom_domain_association

apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_custom_domain_association

apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_custom_domain_association

apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords">certificate_validation_records</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget">dns_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput">enable_www_subdomain_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput">service_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain">enable_www_subdomain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn">service_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_validation_records`<sup>Required</sup> <a name="certificate_validation_records" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords"></a>

```python
certificate_validation_records: ApprunnerCustomDomainAssociationCertificateValidationRecordsList
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a>

---

##### `dns_target`<sup>Required</sup> <a name="dns_target" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget"></a>

```python
dns_target: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `enable_www_subdomain_input`<sup>Optional</sup> <a name="enable_www_subdomain_input" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput"></a>

```python
enable_www_subdomain_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_arn_input`<sup>Optional</sup> <a name="service_arn_input" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput"></a>

```python
service_arn_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `enable_www_subdomain`<sup>Required</sup> <a name="enable_www_subdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain"></a>

```python
enable_www_subdomain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecords <a name="ApprunnerCustomDomainAssociationCertificateValidationRecords" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_custom_domain_association

apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords()
```


### ApprunnerCustomDomainAssociationConfig <a name="ApprunnerCustomDomainAssociationConfig" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_custom_domain_association

apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  service_arn: str,
  enable_www_subdomain: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn">service_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain">enable_www_subdomain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}.

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}.

---

##### `enable_www_subdomain`<sup>Optional</sup> <a name="enable_www_subdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain"></a>

```python
enable_www_subdomain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecordsList <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsList" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_custom_domain_association

apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apprunner_custom_domain_association

apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue"></a>

```python
internal_value: ApprunnerCustomDomainAssociationCertificateValidationRecords
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a>

---



