# `shieldApplicationLayerAutomaticResponse` Submodule <a name="`shieldApplicationLayerAutomaticResponse` Submodule" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldApplicationLayerAutomaticResponse <a name="ShieldApplicationLayerAutomaticResponse" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response aws_shield_application_layer_automatic_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_application_layer_automatic_response

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  resource_arn: str,
  timeouts: ShieldApplicationLayerAutomaticResponseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#timeouts ShieldApplicationLayerAutomaticResponse#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#create ShieldApplicationLayerAutomaticResponse#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#delete ShieldApplicationLayerAutomaticResponse#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#update ShieldApplicationLayerAutomaticResponse#update}

---

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ShieldApplicationLayerAutomaticResponse resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import shield_application_layer_automatic_response

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import shield_application_layer_automatic_response

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import shield_application_layer_automatic_response

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import shield_application_layer_automatic_response

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ShieldApplicationLayerAutomaticResponse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ShieldApplicationLayerAutomaticResponse to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ShieldApplicationLayerAutomaticResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ShieldApplicationLayerAutomaticResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference">ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeouts"></a>

```python
timeouts: ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference">ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ShieldApplicationLayerAutomaticResponseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldApplicationLayerAutomaticResponseConfig <a name="ShieldApplicationLayerAutomaticResponseConfig" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_application_layer_automatic_response

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  resource_arn: str,
  timeouts: ShieldApplicationLayerAutomaticResponseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.timeouts"></a>

```python
timeouts: ShieldApplicationLayerAutomaticResponseTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#timeouts ShieldApplicationLayerAutomaticResponse#timeouts}

---

### ShieldApplicationLayerAutomaticResponseTimeouts <a name="ShieldApplicationLayerAutomaticResponseTimeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_application_layer_automatic_response

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#create ShieldApplicationLayerAutomaticResponse#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#delete ShieldApplicationLayerAutomaticResponse#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/shield_application_layer_automatic_response#update ShieldApplicationLayerAutomaticResponse#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference <a name="ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_application_layer_automatic_response

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ShieldApplicationLayerAutomaticResponseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>]

---



