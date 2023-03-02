# `medialiveMultiplexProgram` Submodule <a name="`medialiveMultiplexProgram` Submodule" id="@cdktf/provider-aws.medialiveMultiplexProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplexProgram <a name="MedialiveMultiplexProgram" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program aws_medialive_multiplex_program}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgram(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  multiplex_id: str,
  program_name: str,
  multiplex_program_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettings]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.multiplexId">multiplex_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.programName">program_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.multiplexProgramSettings">multiplex_program_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]</code> | multiplex_program_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `multiplex_id`<sup>Required</sup> <a name="multiplex_id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.multiplexId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}.

---

##### `program_name`<sup>Required</sup> <a name="program_name" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.programName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}.

---

##### `multiplex_program_settings`<sup>Optional</sup> <a name="multiplex_program_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.multiplexProgramSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]

multiplex_program_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_program_settings MedialiveMultiplexProgram#multiplex_program_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings">put_multiplex_program_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetMultiplexProgramSettings">reset_multiplex_program_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_multiplex_program_settings` <a name="put_multiplex_program_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings"></a>

```python
def put_multiplex_program_settings(
  value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]

---

##### `reset_multiplex_program_settings` <a name="reset_multiplex_program_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetMultiplexProgramSettings"></a>

```python
def reset_multiplex_program_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgram.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgram.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgram.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettings">multiplex_program_settings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexIdInput">multiplex_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettingsInput">multiplex_program_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programNameInput">program_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexId">multiplex_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programName">program_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multiplex_program_settings`<sup>Required</sup> <a name="multiplex_program_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettings"></a>

```python
multiplex_program_settings: MedialiveMultiplexProgramMultiplexProgramSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsList</a>

---

##### `multiplex_id_input`<sup>Optional</sup> <a name="multiplex_id_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexIdInput"></a>

```python
multiplex_id_input: str
```

- *Type:* str

---

##### `multiplex_program_settings_input`<sup>Optional</sup> <a name="multiplex_program_settings_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettingsInput"></a>

```python
multiplex_program_settings_input: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]

---

##### `program_name_input`<sup>Optional</sup> <a name="program_name_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programNameInput"></a>

```python
program_name_input: str
```

- *Type:* str

---

##### `multiplex_id`<sup>Required</sup> <a name="multiplex_id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexId"></a>

```python
multiplex_id: str
```

- *Type:* str

---

##### `program_name`<sup>Required</sup> <a name="program_name" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programName"></a>

```python
program_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexProgramConfig <a name="MedialiveMultiplexProgramConfig" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  multiplex_id: str,
  program_name: str,
  multiplex_program_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexId">multiplex_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.programName">program_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexProgramSettings">multiplex_program_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]</code> | multiplex_program_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `multiplex_id`<sup>Required</sup> <a name="multiplex_id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexId"></a>

```python
multiplex_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}.

---

##### `program_name`<sup>Required</sup> <a name="program_name" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.programName"></a>

```python
program_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}.

---

##### `multiplex_program_settings`<sup>Optional</sup> <a name="multiplex_program_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexProgramSettings"></a>

```python
multiplex_program_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]

multiplex_program_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_program_settings MedialiveMultiplexProgram#multiplex_program_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings(
  preferred_channel_pipeline: str,
  program_number: typing.Union[int, float],
  service_descriptor: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor]] = None,
  video_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline">preferred_channel_pipeline</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.programNumber">program_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor">service_descriptor</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>]]</code> | service_descriptor block. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.videoSettings">video_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>]]</code> | video_settings block. |

---

##### `preferred_channel_pipeline`<sup>Required</sup> <a name="preferred_channel_pipeline" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

```python
preferred_channel_pipeline: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}.

---

##### `program_number`<sup>Required</sup> <a name="program_number" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.programNumber"></a>

```python
program_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}.

---

##### `service_descriptor`<sup>Optional</sup> <a name="service_descriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor"></a>

```python
service_descriptor: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>]]

service_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#service_descriptor MedialiveMultiplexProgram#service_descriptor}

---

##### `video_settings`<sup>Optional</sup> <a name="video_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.videoSettings"></a>

```python
video_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>]]

video_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#video_settings MedialiveMultiplexProgram#video_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor(
  provider_name: str,
  service_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}. |

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}.

---

### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings(
  constant_bitrate: typing.Union[int, float] = None,
  statemux_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings]] = None,
  statmux_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate">constant_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statemuxSettings">statemux_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>]]</code> | statemux_settings block. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings">statmux_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>]]</code> | statmux_settings block. |

---

##### `constant_bitrate`<sup>Optional</sup> <a name="constant_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

```python
constant_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}.

---

##### `statemux_settings`<sup>Optional</sup> <a name="statemux_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statemuxSettings"></a>

```python
statemux_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>]]

statemux_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#statemux_settings MedialiveMultiplexProgram#statemux_settings}

---

##### `statmux_settings`<sup>Optional</sup> <a name="statmux_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

```python
statmux_settings: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>]]

statmux_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#statmux_settings MedialiveMultiplexProgram#statmux_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings(
  maximum_bitrate: typing.Union[int, float] = None,
  minimum_bitrate: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.maximumBitrate">maximum_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.minimumBitrate">minimum_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}. |

---

##### `maximum_bitrate`<sup>Optional</sup> <a name="maximum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.maximumBitrate"></a>

```python
maximum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}.

---

##### `minimum_bitrate`<sup>Optional</sup> <a name="minimum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.minimumBitrate"></a>

```python
minimum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}.

---

### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings(
  maximum_bitrate: typing.Union[int, float] = None,
  minimum_bitrate: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate">maximum_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate">minimum_bitrate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}. |

---

##### `maximum_bitrate`<sup>Optional</sup> <a name="maximum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

```python
maximum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}.

---

##### `minimum_bitrate`<sup>Optional</sup> <a name="minimum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

```python
minimum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexProgramMultiplexProgramSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>]]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor">put_service_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings">put_video_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetServiceDescriptor">reset_service_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetVideoSettings">reset_video_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_descriptor` <a name="put_service_descriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor"></a>

```python
def put_service_descriptor(
  value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>]]

---

##### `put_video_settings` <a name="put_video_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings"></a>

```python
def put_video_settings(
  value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>]]

---

##### `reset_service_descriptor` <a name="reset_service_descriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetServiceDescriptor"></a>

```python
def reset_service_descriptor() -> None
```

##### `reset_video_settings` <a name="reset_video_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetVideoSettings"></a>

```python
def reset_video_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">service_descriptor</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettings">video_settings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput">preferred_channel_pipeline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumberInput">program_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput">service_descriptor_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettingsInput">video_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">preferred_channel_pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumber">program_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_descriptor`<sup>Required</sup> <a name="service_descriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```python
service_descriptor: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList</a>

---

##### `video_settings`<sup>Required</sup> <a name="video_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```python
video_settings: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList</a>

---

##### `preferred_channel_pipeline_input`<sup>Optional</sup> <a name="preferred_channel_pipeline_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput"></a>

```python
preferred_channel_pipeline_input: str
```

- *Type:* str

---

##### `program_number_input`<sup>Optional</sup> <a name="program_number_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumberInput"></a>

```python
program_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_descriptor_input`<sup>Optional</sup> <a name="service_descriptor_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput"></a>

```python
service_descriptor_input: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>]]

---

##### `video_settings_input`<sup>Optional</sup> <a name="video_settings_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettingsInput"></a>

```python
video_settings_input: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>]]

---

##### `preferred_channel_pipeline`<sup>Required</sup> <a name="preferred_channel_pipeline" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```python
preferred_channel_pipeline: str
```

- *Type:* str

---

##### `program_number`<sup>Required</sup> <a name="program_number" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```python
program_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MedialiveMultiplexProgramMultiplexProgramSettings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>, cdktf.IResolvable]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>]]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>, cdktf.IResolvable]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>]]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatemuxSettings">put_statemux_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings">put_statmux_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate">reset_constant_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatemuxSettings">reset_statemux_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings">reset_statmux_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_statemux_settings` <a name="put_statemux_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatemuxSettings"></a>

```python
def put_statemux_settings(
  value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatemuxSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>]]

---

##### `put_statmux_settings` <a name="put_statmux_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings"></a>

```python
def put_statmux_settings(
  value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>]]

---

##### `reset_constant_bitrate` <a name="reset_constant_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate"></a>

```python
def reset_constant_bitrate() -> None
```

##### `reset_statemux_settings` <a name="reset_statemux_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatemuxSettings"></a>

```python
def reset_statemux_settings() -> None
```

##### `reset_statmux_settings` <a name="reset_statmux_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings"></a>

```python
def reset_statmux_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statemuxSettings">statemux_settings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">statmux_settings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput">constant_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statemuxSettingsInput">statemux_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput">statmux_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">constant_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `statemux_settings`<sup>Required</sup> <a name="statemux_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statemuxSettings"></a>

```python
statemux_settings: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList</a>

---

##### `statmux_settings`<sup>Required</sup> <a name="statmux_settings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```python
statmux_settings: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList</a>

---

##### `constant_bitrate_input`<sup>Optional</sup> <a name="constant_bitrate_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput"></a>

```python
constant_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statemux_settings_input`<sup>Optional</sup> <a name="statemux_settings_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statemuxSettingsInput"></a>

```python
statemux_settings_input: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>]]

---

##### `statmux_settings_input`<sup>Optional</sup> <a name="statmux_settings_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput"></a>

```python
statmux_settings_input: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>]]

---

##### `constant_bitrate`<sup>Required</sup> <a name="constant_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```python
constant_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>, cdktf.IResolvable]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>]]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetMaximumBitrate">reset_maximum_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetMinimumBitrate">reset_minimum_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetPriority">reset_priority</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_bitrate` <a name="reset_maximum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetMaximumBitrate"></a>

```python
def reset_maximum_bitrate() -> None
```

##### `reset_minimum_bitrate` <a name="reset_minimum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetMinimumBitrate"></a>

```python
def reset_minimum_bitrate() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.maximumBitrateInput">maximum_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.minimumBitrateInput">minimum_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.maximumBitrate">maximum_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.minimumBitrate">minimum_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_bitrate_input`<sup>Optional</sup> <a name="maximum_bitrate_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.maximumBitrateInput"></a>

```python
maximum_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_bitrate_input`<sup>Optional</sup> <a name="minimum_bitrate_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.minimumBitrateInput"></a>

```python
minimum_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bitrate`<sup>Required</sup> <a name="maximum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.maximumBitrate"></a>

```python
maximum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_bitrate`<sup>Required</sup> <a name="minimum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.minimumBitrate"></a>

```python
minimum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>, cdktf.IResolvable]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>]]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_multiplex_program

medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate">reset_maximum_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate">reset_minimum_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority">reset_priority</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_bitrate` <a name="reset_maximum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate"></a>

```python
def reset_maximum_bitrate() -> None
```

##### `reset_minimum_bitrate` <a name="reset_minimum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate"></a>

```python
def reset_minimum_bitrate() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput">maximum_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput">minimum_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">maximum_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">minimum_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_bitrate_input`<sup>Optional</sup> <a name="maximum_bitrate_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput"></a>

```python
maximum_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_bitrate_input`<sup>Optional</sup> <a name="minimum_bitrate_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput"></a>

```python
minimum_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bitrate`<sup>Required</sup> <a name="maximum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```python
maximum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_bitrate`<sup>Required</sup> <a name="minimum_bitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```python
minimum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>, cdktf.IResolvable]

---



