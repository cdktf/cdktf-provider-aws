# `lightsailInstancePublicPorts` Submodule <a name="`lightsailInstancePublicPorts` Submodule" id="@cdktf/provider-aws.lightsailInstancePublicPorts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailInstancePublicPorts <a name="LightsailInstancePublicPorts" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports aws_lightsail_instance_public_ports}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_instance_public_ports

lightsailInstancePublicPorts.LightsailInstancePublicPorts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  port_info: typing.Union[IResolvable, typing.List[LightsailInstancePublicPortsPortInfo]],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.portInfo">port_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]</code> | port_info block. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}.

---

##### `port_info`<sup>Required</sup> <a name="port_info" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.portInfo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]

port_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo">put_port_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_port_info` <a name="put_port_info" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo"></a>

```python
def put_port_info(
  value: typing.Union[IResolvable, typing.List[LightsailInstancePublicPortsPortInfo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_instance_public_ports

lightsailInstancePublicPorts.LightsailInstancePublicPorts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_instance_public_ports

lightsailInstancePublicPorts.LightsailInstancePublicPorts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_instance_public_ports

lightsailInstancePublicPorts.LightsailInstancePublicPorts.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo">port_info</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput">port_info_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `port_info`<sup>Required</sup> <a name="port_info" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo"></a>

```python
port_info: LightsailInstancePublicPortsPortInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `port_info_input`<sup>Optional</sup> <a name="port_info_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput"></a>

```python
port_info_input: typing.Union[IResolvable, typing.List[LightsailInstancePublicPortsPortInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailInstancePublicPortsConfig <a name="LightsailInstancePublicPortsConfig" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_instance_public_ports

lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  port_info: typing.Union[IResolvable, typing.List[LightsailInstancePublicPortsPortInfo]],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo">port_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]</code> | port_info block. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}.

---

##### `port_info`<sup>Required</sup> <a name="port_info" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo"></a>

```python
port_info: typing.Union[IResolvable, typing.List[LightsailInstancePublicPortsPortInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]

port_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LightsailInstancePublicPortsPortInfo <a name="LightsailInstancePublicPortsPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_instance_public_ports

lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo(
  from_port: typing.Union[int, float],
  protocol: str,
  to_port: typing.Union[int, float],
  cidr_list_aliases: typing.List[str] = None,
  cidrs: typing.List[str] = None,
  ipv6_cidrs: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases">cidr_list_aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs">ipv6_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}. |

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}.

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}.

---

##### `cidr_list_aliases`<sup>Optional</sup> <a name="cidr_list_aliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases"></a>

```python
cidr_list_aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}.

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}.

---

##### `ipv6_cidrs`<sup>Optional</sup> <a name="ipv6_cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs"></a>

```python
ipv6_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailInstancePublicPortsPortInfoList <a name="LightsailInstancePublicPortsPortInfoList" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_instance_public_ports

lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailInstancePublicPortsPortInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LightsailInstancePublicPortsPortInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>]]

---


### LightsailInstancePublicPortsPortInfoOutputReference <a name="LightsailInstancePublicPortsPortInfoOutputReference" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_instance_public_ports

lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases">reset_cidr_list_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs">reset_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs">reset_ipv6_cidrs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_list_aliases` <a name="reset_cidr_list_aliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases"></a>

```python
def reset_cidr_list_aliases() -> None
```

##### `reset_cidrs` <a name="reset_cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs"></a>

```python
def reset_cidrs() -> None
```

##### `reset_ipv6_cidrs` <a name="reset_ipv6_cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs"></a>

```python
def reset_ipv6_cidrs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput">cidr_list_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput">cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput">ipv6_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases">cidr_list_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs">ipv6_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_list_aliases_input`<sup>Optional</sup> <a name="cidr_list_aliases_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput"></a>

```python
cidr_list_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidrs_input`<sup>Optional</sup> <a name="cidrs_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput"></a>

```python
cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidrs_input`<sup>Optional</sup> <a name="ipv6_cidrs_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput"></a>

```python
ipv6_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_list_aliases`<sup>Required</sup> <a name="cidr_list_aliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases"></a>

```python
cidr_list_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidrs`<sup>Required</sup> <a name="ipv6_cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs"></a>

```python
ipv6_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LightsailInstancePublicPortsPortInfo, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo">LightsailInstancePublicPortsPortInfo</a>, cdktf.IResolvable]

---



