# `dataAwsDxRouterConfiguration` Submodule <a name="`dataAwsDxRouterConfiguration` Submodule" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDxRouterConfiguration <a name="DataAwsDxRouterConfiguration" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration aws_dx_router_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dx_router_configuration

dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  router_type_identifier: str,
  virtual_interface_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.routerTypeIdentifier">router_type_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#router_type_identifier DataAwsDxRouterConfiguration#router_type_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#virtual_interface_id DataAwsDxRouterConfiguration#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#id DataAwsDxRouterConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `router_type_identifier`<sup>Required</sup> <a name="router_type_identifier" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.routerTypeIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#router_type_identifier DataAwsDxRouterConfiguration#router_type_identifier}.

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.virtualInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#virtual_interface_id DataAwsDxRouterConfiguration#virtual_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#id DataAwsDxRouterConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dx_router_configuration

dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dx_router_configuration

dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dx_router_configuration

dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.customerRouterConfig">customer_router_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.router">router</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList">DataAwsDxRouterConfigurationRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.routerTypeIdentifierInput">router_type_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.virtualInterfaceIdInput">virtual_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.routerTypeIdentifier">router_type_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `customer_router_config`<sup>Required</sup> <a name="customer_router_config" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.customerRouterConfig"></a>

```python
customer_router_config: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.router"></a>

```python
router: DataAwsDxRouterConfigurationRouterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList">DataAwsDxRouterConfigurationRouterList</a>

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.virtualInterfaceName"></a>

```python
virtual_interface_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `router_type_identifier_input`<sup>Optional</sup> <a name="router_type_identifier_input" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.routerTypeIdentifierInput"></a>

```python
router_type_identifier_input: str
```

- *Type:* str

---

##### `virtual_interface_id_input`<sup>Optional</sup> <a name="virtual_interface_id_input" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.virtualInterfaceIdInput"></a>

```python
virtual_interface_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `router_type_identifier`<sup>Required</sup> <a name="router_type_identifier" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.routerTypeIdentifier"></a>

```python
router_type_identifier: str
```

- *Type:* str

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.virtualInterfaceId"></a>

```python
virtual_interface_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDxRouterConfigurationConfig <a name="DataAwsDxRouterConfigurationConfig" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dx_router_configuration

dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  router_type_identifier: str,
  virtual_interface_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.routerTypeIdentifier">router_type_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#router_type_identifier DataAwsDxRouterConfiguration#router_type_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#virtual_interface_id DataAwsDxRouterConfiguration#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#id DataAwsDxRouterConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `router_type_identifier`<sup>Required</sup> <a name="router_type_identifier" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.routerTypeIdentifier"></a>

```python
router_type_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#router_type_identifier DataAwsDxRouterConfiguration#router_type_identifier}.

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.virtualInterfaceId"></a>

```python
virtual_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#virtual_interface_id DataAwsDxRouterConfiguration#virtual_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_router_configuration#id DataAwsDxRouterConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsDxRouterConfigurationRouter <a name="DataAwsDxRouterConfigurationRouter" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dx_router_configuration

dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouter()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDxRouterConfigurationRouterList <a name="DataAwsDxRouterConfigurationRouterList" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dx_router_configuration

dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDxRouterConfigurationRouterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsDxRouterConfigurationRouterOutputReference <a name="DataAwsDxRouterConfigurationRouterOutputReference" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_dx_router_configuration

dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.routerTypeIdentifier">router_type_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.software">software</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.xsltTemplateName">xslt_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.xsltTemplateNameForMacSec">xslt_template_name_for_mac_sec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouter">DataAwsDxRouterConfigurationRouter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `router_type_identifier`<sup>Required</sup> <a name="router_type_identifier" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.routerTypeIdentifier"></a>

```python
router_type_identifier: str
```

- *Type:* str

---

##### `software`<sup>Required</sup> <a name="software" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.software"></a>

```python
software: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `xslt_template_name`<sup>Required</sup> <a name="xslt_template_name" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.xsltTemplateName"></a>

```python
xslt_template_name: str
```

- *Type:* str

---

##### `xslt_template_name_for_mac_sec`<sup>Required</sup> <a name="xslt_template_name_for_mac_sec" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.xsltTemplateNameForMacSec"></a>

```python
xslt_template_name_for_mac_sec: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsDxRouterConfigurationRouter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDxRouterConfiguration.DataAwsDxRouterConfigurationRouter">DataAwsDxRouterConfigurationRouter</a>

---



