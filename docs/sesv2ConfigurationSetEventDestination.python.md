# `sesv2ConfigurationSetEventDestination` Submodule <a name="`sesv2ConfigurationSetEventDestination` Submodule" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2ConfigurationSetEventDestination <a name="Sesv2ConfigurationSetEventDestination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination aws_sesv2_configuration_set_event_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_set_name: str,
  event_destination: Sesv2ConfigurationSetEventDestinationEventDestination,
  event_destination_name: str,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#configuration_set_name Sesv2ConfigurationSetEventDestination#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.eventDestination">event_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination">Sesv2ConfigurationSetEventDestinationEventDestination</a></code> | event_destination block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.eventDestinationName">event_destination_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_destination_name Sesv2ConfigurationSetEventDestination#event_destination_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#id Sesv2ConfigurationSetEventDestination#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.configurationSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#configuration_set_name Sesv2ConfigurationSetEventDestination#configuration_set_name}.

---

##### `event_destination`<sup>Required</sup> <a name="event_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.eventDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination">Sesv2ConfigurationSetEventDestinationEventDestination</a>

event_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_destination Sesv2ConfigurationSetEventDestination#event_destination}

---

##### `event_destination_name`<sup>Required</sup> <a name="event_destination_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.eventDestinationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_destination_name Sesv2ConfigurationSetEventDestination#event_destination_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#id Sesv2ConfigurationSetEventDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#region Sesv2ConfigurationSetEventDestination#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination">put_event_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_destination` <a name="put_event_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination"></a>

```python
def put_event_destination(
  matching_event_types: typing.List[str],
  cloud_watch_destination: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event_bridge_destination: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination = None,
  kinesis_firehose_destination: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination = None,
  pinpoint_destination: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination = None,
  sns_destination: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination = None
) -> None
```

###### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination.parameter.matchingEventTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#matching_event_types Sesv2ConfigurationSetEventDestination#matching_event_types}.

---

###### `cloud_watch_destination`<sup>Optional</sup> <a name="cloud_watch_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination.parameter.cloudWatchDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination</a>

cloud_watch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#cloud_watch_destination Sesv2ConfigurationSetEventDestination#cloud_watch_destination}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#enabled Sesv2ConfigurationSetEventDestination#enabled}.

---

###### `event_bridge_destination`<sup>Optional</sup> <a name="event_bridge_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination.parameter.eventBridgeDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

event_bridge_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_bridge_destination Sesv2ConfigurationSetEventDestination#event_bridge_destination}

---

###### `kinesis_firehose_destination`<sup>Optional</sup> <a name="kinesis_firehose_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination.parameter.kinesisFirehoseDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

kinesis_firehose_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#kinesis_firehose_destination Sesv2ConfigurationSetEventDestination#kinesis_firehose_destination}

---

###### `pinpoint_destination`<sup>Optional</sup> <a name="pinpoint_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination.parameter.pinpointDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination</a>

pinpoint_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#pinpoint_destination Sesv2ConfigurationSetEventDestination#pinpoint_destination}

---

###### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.putEventDestination.parameter.snsDestination"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination</a>

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#sns_destination Sesv2ConfigurationSetEventDestination#sns_destination}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Sesv2ConfigurationSetEventDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Sesv2ConfigurationSetEventDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Sesv2ConfigurationSetEventDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Sesv2ConfigurationSetEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Sesv2ConfigurationSetEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.eventDestination">event_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.eventDestinationInput">event_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination">Sesv2ConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.eventDestinationNameInput">event_destination_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.eventDestinationName">event_destination_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_destination`<sup>Required</sup> <a name="event_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.eventDestination"></a>

```python
event_destination: Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference</a>

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `event_destination_input`<sup>Optional</sup> <a name="event_destination_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.eventDestinationInput"></a>

```python
event_destination_input: Sesv2ConfigurationSetEventDestinationEventDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination">Sesv2ConfigurationSetEventDestinationEventDestination</a>

---

##### `event_destination_name_input`<sup>Optional</sup> <a name="event_destination_name_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.eventDestinationNameInput"></a>

```python
event_destination_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `event_destination_name`<sup>Required</sup> <a name="event_destination_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.eventDestinationName"></a>

```python
event_destination_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2ConfigurationSetEventDestinationConfig <a name="Sesv2ConfigurationSetEventDestinationConfig" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_set_name: str,
  event_destination: Sesv2ConfigurationSetEventDestinationEventDestination,
  event_destination_name: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#configuration_set_name Sesv2ConfigurationSetEventDestination#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.eventDestination">event_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination">Sesv2ConfigurationSetEventDestinationEventDestination</a></code> | event_destination block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.eventDestinationName">event_destination_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_destination_name Sesv2ConfigurationSetEventDestination#event_destination_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#id Sesv2ConfigurationSetEventDestination#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#configuration_set_name Sesv2ConfigurationSetEventDestination#configuration_set_name}.

---

##### `event_destination`<sup>Required</sup> <a name="event_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.eventDestination"></a>

```python
event_destination: Sesv2ConfigurationSetEventDestinationEventDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination">Sesv2ConfigurationSetEventDestinationEventDestination</a>

event_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_destination Sesv2ConfigurationSetEventDestination#event_destination}

---

##### `event_destination_name`<sup>Required</sup> <a name="event_destination_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.eventDestinationName"></a>

```python
event_destination_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_destination_name Sesv2ConfigurationSetEventDestination#event_destination_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#id Sesv2ConfigurationSetEventDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#region Sesv2ConfigurationSetEventDestination#region}

---

### Sesv2ConfigurationSetEventDestinationEventDestination <a name="Sesv2ConfigurationSetEventDestinationEventDestination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination(
  matching_event_types: typing.List[str],
  cloud_watch_destination: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination = None,
  enabled: typing.Union[bool, IResolvable] = None,
  event_bridge_destination: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination = None,
  kinesis_firehose_destination: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination = None,
  pinpoint_destination: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination = None,
  sns_destination: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#matching_event_types Sesv2ConfigurationSetEventDestination#matching_event_types}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.cloudWatchDestination">cloud_watch_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination</a></code> | cloud_watch_destination block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#enabled Sesv2ConfigurationSetEventDestination#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination">event_bridge_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | event_bridge_destination block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | kinesis_firehose_destination block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.pinpointDestination">pinpoint_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination</a></code> | pinpoint_destination block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | sns_destination block. |

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#matching_event_types Sesv2ConfigurationSetEventDestination#matching_event_types}.

---

##### `cloud_watch_destination`<sup>Optional</sup> <a name="cloud_watch_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.cloudWatchDestination"></a>

```python
cloud_watch_destination: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination</a>

cloud_watch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#cloud_watch_destination Sesv2ConfigurationSetEventDestination#cloud_watch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#enabled Sesv2ConfigurationSetEventDestination#enabled}.

---

##### `event_bridge_destination`<sup>Optional</sup> <a name="event_bridge_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination"></a>

```python
event_bridge_destination: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

event_bridge_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_bridge_destination Sesv2ConfigurationSetEventDestination#event_bridge_destination}

---

##### `kinesis_firehose_destination`<sup>Optional</sup> <a name="kinesis_firehose_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

kinesis_firehose_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#kinesis_firehose_destination Sesv2ConfigurationSetEventDestination#kinesis_firehose_destination}

---

##### `pinpoint_destination`<sup>Optional</sup> <a name="pinpoint_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.pinpointDestination"></a>

```python
pinpoint_destination: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination</a>

pinpoint_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#pinpoint_destination Sesv2ConfigurationSetEventDestination#pinpoint_destination}

---

##### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination.property.snsDestination"></a>

```python
sns_destination: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination</a>

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#sns_destination Sesv2ConfigurationSetEventDestination#sns_destination}

---

### Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination <a name="Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination(
  dimension_configuration: typing.Union[IResolvable, typing.List[Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination.property.dimensionConfiguration">dimension_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]]</code> | dimension_configuration block. |

---

##### `dimension_configuration`<sup>Required</sup> <a name="dimension_configuration" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination.property.dimensionConfiguration"></a>

```python
dimension_configuration: typing.Union[IResolvable, typing.List[Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]]

dimension_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#dimension_configuration Sesv2ConfigurationSetEventDestination#dimension_configuration}

---

### Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration <a name="Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration(
  default_dimension_value: str,
  dimension_name: str,
  dimension_value_source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration.property.defaultDimensionValue">default_dimension_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#default_dimension_value Sesv2ConfigurationSetEventDestination#default_dimension_value}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration.property.dimensionName">dimension_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#dimension_name Sesv2ConfigurationSetEventDestination#dimension_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration.property.dimensionValueSource">dimension_value_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#dimension_value_source Sesv2ConfigurationSetEventDestination#dimension_value_source}. |

---

##### `default_dimension_value`<sup>Required</sup> <a name="default_dimension_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration.property.defaultDimensionValue"></a>

```python
default_dimension_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#default_dimension_value Sesv2ConfigurationSetEventDestination#default_dimension_value}.

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#dimension_name Sesv2ConfigurationSetEventDestination#dimension_name}.

---

##### `dimension_value_source`<sup>Required</sup> <a name="dimension_value_source" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration.property.dimensionValueSource"></a>

```python
dimension_value_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#dimension_value_source Sesv2ConfigurationSetEventDestination#dimension_value_source}.

---

### Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination <a name="Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination(
  event_bus_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_bus_arn Sesv2ConfigurationSetEventDestination#event_bus_arn}. |

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_bus_arn Sesv2ConfigurationSetEventDestination#event_bus_arn}.

---

### Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination <a name="Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination(
  delivery_stream_arn: str,
  iam_role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#delivery_stream_arn Sesv2ConfigurationSetEventDestination#delivery_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#iam_role_arn Sesv2ConfigurationSetEventDestination#iam_role_arn}. |

---

##### `delivery_stream_arn`<sup>Required</sup> <a name="delivery_stream_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#delivery_stream_arn Sesv2ConfigurationSetEventDestination#delivery_stream_arn}.

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#iam_role_arn Sesv2ConfigurationSetEventDestination#iam_role_arn}.

---

### Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination <a name="Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination(
  application_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination.property.applicationArn">application_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#application_arn Sesv2ConfigurationSetEventDestination#application_arn}. |

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#application_arn Sesv2ConfigurationSetEventDestination#application_arn}.

---

### Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination <a name="Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination(
  topic_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#topic_arn Sesv2ConfigurationSetEventDestination#topic_arn}. |

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#topic_arn Sesv2ConfigurationSetEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList <a name="Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]]

---


### Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference <a name="Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.defaultDimensionValueInput">default_dimension_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.dimensionNameInput">dimension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.dimensionValueSourceInput">dimension_value_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.defaultDimensionValue">default_dimension_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.dimensionValueSource">dimension_value_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_dimension_value_input`<sup>Optional</sup> <a name="default_dimension_value_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.defaultDimensionValueInput"></a>

```python
default_dimension_value_input: str
```

- *Type:* str

---

##### `dimension_name_input`<sup>Optional</sup> <a name="dimension_name_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.dimensionNameInput"></a>

```python
dimension_name_input: str
```

- *Type:* str

---

##### `dimension_value_source_input`<sup>Optional</sup> <a name="dimension_value_source_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.dimensionValueSourceInput"></a>

```python
dimension_value_source_input: str
```

- *Type:* str

---

##### `default_dimension_value`<sup>Required</sup> <a name="default_dimension_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.defaultDimensionValue"></a>

```python
default_dimension_value: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `dimension_value_source`<sup>Required</sup> <a name="dimension_value_source" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.dimensionValueSource"></a>

```python
dimension_value_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]

---


### Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference <a name="Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.putDimensionConfiguration">put_dimension_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension_configuration` <a name="put_dimension_configuration" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.putDimensionConfiguration"></a>

```python
def put_dimension_configuration(
  value: typing.Union[IResolvable, typing.List[Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.putDimensionConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.dimensionConfiguration">dimension_configuration</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.dimensionConfigurationInput">dimension_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_configuration`<sup>Required</sup> <a name="dimension_configuration" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.dimensionConfiguration"></a>

```python
dimension_configuration: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList</a>

---

##### `dimension_configuration_input`<sup>Optional</sup> <a name="dimension_configuration_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.dimensionConfigurationInput"></a>

```python
dimension_configuration_input: typing.Union[IResolvable, typing.List[Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination</a>

---


### Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference <a name="Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput">event_bus_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_arn_input`<sup>Optional</sup> <a name="event_bus_arn_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput"></a>

```python
event_bus_arn_input: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---


### Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference <a name="Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">delivery_stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_arn_input`<sup>Optional</sup> <a name="delivery_stream_arn_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```python
delivery_stream_arn_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `delivery_stream_arn`<sup>Required</sup> <a name="delivery_stream_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---


### Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference <a name="Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putCloudWatchDestination">put_cloud_watch_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination">put_event_bridge_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination">put_kinesis_firehose_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putPinpointDestination">put_pinpoint_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination">put_sns_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudWatchDestination">reset_cloud_watch_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination">reset_event_bridge_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination">reset_kinesis_firehose_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetPinpointDestination">reset_pinpoint_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination">reset_sns_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_watch_destination` <a name="put_cloud_watch_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putCloudWatchDestination"></a>

```python
def put_cloud_watch_destination(
  dimension_configuration: typing.Union[IResolvable, typing.List[Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration]]
) -> None
```

###### `dimension_configuration`<sup>Required</sup> <a name="dimension_configuration" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putCloudWatchDestination.parameter.dimensionConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration</a>]]

dimension_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#dimension_configuration Sesv2ConfigurationSetEventDestination#dimension_configuration}

---

##### `put_event_bridge_destination` <a name="put_event_bridge_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination"></a>

```python
def put_event_bridge_destination(
  event_bus_arn: str
) -> None
```

###### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination.parameter.eventBusArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#event_bus_arn Sesv2ConfigurationSetEventDestination#event_bus_arn}.

---

##### `put_kinesis_firehose_destination` <a name="put_kinesis_firehose_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination"></a>

```python
def put_kinesis_firehose_destination(
  delivery_stream_arn: str,
  iam_role_arn: str
) -> None
```

###### `delivery_stream_arn`<sup>Required</sup> <a name="delivery_stream_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination.parameter.deliveryStreamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#delivery_stream_arn Sesv2ConfigurationSetEventDestination#delivery_stream_arn}.

---

###### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#iam_role_arn Sesv2ConfigurationSetEventDestination#iam_role_arn}.

---

##### `put_pinpoint_destination` <a name="put_pinpoint_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putPinpointDestination"></a>

```python
def put_pinpoint_destination(
  application_arn: str
) -> None
```

###### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putPinpointDestination.parameter.applicationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#application_arn Sesv2ConfigurationSetEventDestination#application_arn}.

---

##### `put_sns_destination` <a name="put_sns_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination"></a>

```python
def put_sns_destination(
  topic_arn: str
) -> None
```

###### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination.parameter.topicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sesv2_configuration_set_event_destination#topic_arn Sesv2ConfigurationSetEventDestination#topic_arn}.

---

##### `reset_cloud_watch_destination` <a name="reset_cloud_watch_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudWatchDestination"></a>

```python
def reset_cloud_watch_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_bridge_destination` <a name="reset_event_bridge_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination"></a>

```python
def reset_event_bridge_destination() -> None
```

##### `reset_kinesis_firehose_destination` <a name="reset_kinesis_firehose_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination"></a>

```python
def reset_kinesis_firehose_destination() -> None
```

##### `reset_pinpoint_destination` <a name="reset_pinpoint_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetPinpointDestination"></a>

```python
def reset_pinpoint_destination() -> None
```

##### `reset_sns_destination` <a name="reset_sns_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination"></a>

```python
def reset_sns_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudWatchDestination">cloud_watch_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination">event_bridge_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.pinpointDestination">pinpoint_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudWatchDestinationInput">cloud_watch_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput">event_bridge_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput">kinesis_firehose_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput">matching_event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.pinpointDestinationInput">pinpoint_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput">sns_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination">Sesv2ConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_destination`<sup>Required</sup> <a name="cloud_watch_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudWatchDestination"></a>

```python
cloud_watch_destination: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference</a>

---

##### `event_bridge_destination`<sup>Required</sup> <a name="event_bridge_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination"></a>

```python
event_bridge_destination: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a>

---

##### `kinesis_firehose_destination`<sup>Required</sup> <a name="kinesis_firehose_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a>

---

##### `pinpoint_destination`<sup>Required</sup> <a name="pinpoint_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.pinpointDestination"></a>

```python
pinpoint_destination: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference</a>

---

##### `sns_destination`<sup>Required</sup> <a name="sns_destination" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination"></a>

```python
sns_destination: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a>

---

##### `cloud_watch_destination_input`<sup>Optional</sup> <a name="cloud_watch_destination_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudWatchDestinationInput"></a>

```python
cloud_watch_destination_input: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination">Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_bridge_destination_input`<sup>Optional</sup> <a name="event_bridge_destination_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput"></a>

```python
event_bridge_destination_input: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination">Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---

##### `kinesis_firehose_destination_input`<sup>Optional</sup> <a name="kinesis_firehose_destination_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput"></a>

```python
kinesis_firehose_destination_input: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---

##### `matching_event_types_input`<sup>Optional</sup> <a name="matching_event_types_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput"></a>

```python
matching_event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pinpoint_destination_input`<sup>Optional</sup> <a name="pinpoint_destination_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.pinpointDestinationInput"></a>

```python
pinpoint_destination_input: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination</a>

---

##### `sns_destination_input`<sup>Optional</sup> <a name="sns_destination_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput"></a>

```python
sns_destination_input: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetEventDestinationEventDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestination">Sesv2ConfigurationSetEventDestinationEventDestination</a>

---


### Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference <a name="Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.applicationArnInput">application_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn_input`<sup>Optional</sup> <a name="application_arn_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.applicationArnInput"></a>

```python
application_arn_input: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination">Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination</a>

---


### Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference <a name="Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_configuration_set_event_destination

sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSetEventDestination.Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination">Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---



