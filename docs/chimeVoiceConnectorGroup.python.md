# `chimeVoiceConnectorGroup` Submodule <a name="`chimeVoiceConnectorGroup` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorGroup <a name="ChimeVoiceConnectorGroup" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group aws_chime_voice_connector_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_group

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  connector: typing.Union[IResolvable, typing.List[ChimeVoiceConnectorGroupConnector]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.connector">connector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]</code> | connector block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}.

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.connector"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]

connector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#connector ChimeVoiceConnectorGroup#connector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector">put_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetConnector">reset_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_connector` <a name="put_connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector"></a>

```python
def put_connector(
  value: typing.Union[IResolvable, typing.List[ChimeVoiceConnectorGroupConnector]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]

---

##### `reset_connector` <a name="reset_connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetConnector"></a>

```python
def reset_connector() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_group

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_group

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_group

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connector">connector</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList">ChimeVoiceConnectorGroupConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connectorInput">connector_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connector"></a>

```python
connector: ChimeVoiceConnectorGroupConnectorList
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList">ChimeVoiceConnectorGroupConnectorList</a>

---

##### `connector_input`<sup>Optional</sup> <a name="connector_input" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connectorInput"></a>

```python
connector_input: typing.Union[IResolvable, typing.List[ChimeVoiceConnectorGroupConnector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorGroupConfig <a name="ChimeVoiceConnectorGroupConfig" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_group

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  connector: typing.Union[IResolvable, typing.List[ChimeVoiceConnectorGroupConnector]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connector">connector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]</code> | connector block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}.

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connector"></a>

```python
connector: typing.Union[IResolvable, typing.List[ChimeVoiceConnectorGroupConnector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]

connector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#connector ChimeVoiceConnectorGroup#connector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimeVoiceConnectorGroupConnector <a name="ChimeVoiceConnectorGroupConnector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_group

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector(
  priority: typing.Union[int, float],
  voice_connector_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}.

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.voiceConnectorId"></a>

```python
voice_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorGroupConnectorList <a name="ChimeVoiceConnectorGroupConnectorList" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_group

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeVoiceConnectorGroupConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChimeVoiceConnectorGroupConnector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>]]

---


### ChimeVoiceConnectorGroupConnectorOutputReference <a name="ChimeVoiceConnectorGroupConnectorOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_group

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorIdInput">voice_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `voice_connector_id_input`<sup>Optional</sup> <a name="voice_connector_id_input" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorIdInput"></a>

```python
voice_connector_id_input: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorId"></a>

```python
voice_connector_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ChimeVoiceConnectorGroupConnector, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>, cdktf.IResolvable]

---



