# `directoryServiceConditionalForwarder` Submodule <a name="`directoryServiceConditionalForwarder` Submodule" id="@cdktf/provider-aws.directoryServiceConditionalForwarder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceConditionalForwarder <a name="DirectoryServiceConditionalForwarder" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder aws_directory_service_conditional_forwarder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_conditional_forwarder

directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  dns_ips: typing.List[str],
  remote_domain_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#directory_id DirectoryServiceConditionalForwarder#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#dns_ips DirectoryServiceConditionalForwarder#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.remoteDomainName">remote_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#remote_domain_name DirectoryServiceConditionalForwarder#remote_domain_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#id DirectoryServiceConditionalForwarder#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#directory_id DirectoryServiceConditionalForwarder#directory_id}.

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.dnsIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#dns_ips DirectoryServiceConditionalForwarder#dns_ips}.

---

##### `remote_domain_name`<sup>Required</sup> <a name="remote_domain_name" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.remoteDomainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#remote_domain_name DirectoryServiceConditionalForwarder#remote_domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#id DirectoryServiceConditionalForwarder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_conditional_forwarder

directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_conditional_forwarder

directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_conditional_forwarder

directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dnsIpsInput">dns_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.remoteDomainNameInput">remote_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.remoteDomainName">remote_domain_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `dns_ips_input`<sup>Optional</sup> <a name="dns_ips_input" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dnsIpsInput"></a>

```python
dns_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `remote_domain_name_input`<sup>Optional</sup> <a name="remote_domain_name_input" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.remoteDomainNameInput"></a>

```python
remote_domain_name_input: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `remote_domain_name`<sup>Required</sup> <a name="remote_domain_name" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.remoteDomainName"></a>

```python
remote_domain_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceConditionalForwarderConfig <a name="DirectoryServiceConditionalForwarderConfig" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_conditional_forwarder

directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  dns_ips: typing.List[str],
  remote_domain_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#directory_id DirectoryServiceConditionalForwarder#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#dns_ips DirectoryServiceConditionalForwarder#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.remoteDomainName">remote_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#remote_domain_name DirectoryServiceConditionalForwarder#remote_domain_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#id DirectoryServiceConditionalForwarder#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#directory_id DirectoryServiceConditionalForwarder#directory_id}.

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#dns_ips DirectoryServiceConditionalForwarder#dns_ips}.

---

##### `remote_domain_name`<sup>Required</sup> <a name="remote_domain_name" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.remoteDomainName"></a>

```python
remote_domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#remote_domain_name DirectoryServiceConditionalForwarder#remote_domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceConditionalForwarder.DirectoryServiceConditionalForwarderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder#id DirectoryServiceConditionalForwarder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



