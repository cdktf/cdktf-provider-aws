# `globalacceleratorCustomRoutingListener` Submodule <a name="`globalacceleratorCustomRoutingListener` Submodule" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCustomRoutingListener <a name="GlobalacceleratorCustomRoutingListener" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener aws_globalaccelerator_custom_routing_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accelerator_arn: str,
  port_range: typing.Union[IResolvable, typing.List[GlobalacceleratorCustomRoutingListenerPortRange]],
  id: str = None,
  timeouts: GlobalacceleratorCustomRoutingListenerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.acceleratorArn">accelerator_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.portRange">port_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerator_arn`<sup>Required</sup> <a name="accelerator_arn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.acceleratorArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}.

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.portRange"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#port_range GlobalacceleratorCustomRoutingListener#port_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#timeouts GlobalacceleratorCustomRoutingListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange">put_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_port_range` <a name="put_port_range" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange"></a>

```python
def put_port_range(
  value: typing.Union[IResolvable, typing.List[GlobalacceleratorCustomRoutingListenerPortRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GlobalacceleratorCustomRoutingListener resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GlobalacceleratorCustomRoutingListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlobalacceleratorCustomRoutingListener to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlobalacceleratorCustomRoutingListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCustomRoutingListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRange">port_range</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList">GlobalacceleratorCustomRoutingListenerPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference">GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArnInput">accelerator_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRangeInput">port_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArn">accelerator_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRange"></a>

```python
port_range: GlobalacceleratorCustomRoutingListenerPortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList">GlobalacceleratorCustomRoutingListenerPortRangeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeouts"></a>

```python
timeouts: GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference">GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference</a>

---

##### `accelerator_arn_input`<sup>Optional</sup> <a name="accelerator_arn_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArnInput"></a>

```python
accelerator_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRangeInput"></a>

```python
port_range_input: typing.Union[IResolvable, typing.List[GlobalacceleratorCustomRoutingListenerPortRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GlobalacceleratorCustomRoutingListenerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>]

---

##### `accelerator_arn`<sup>Required</sup> <a name="accelerator_arn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArn"></a>

```python
accelerator_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCustomRoutingListenerConfig <a name="GlobalacceleratorCustomRoutingListenerConfig" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accelerator_arn: str,
  port_range: typing.Union[IResolvable, typing.List[GlobalacceleratorCustomRoutingListenerPortRange]],
  id: str = None,
  timeouts: GlobalacceleratorCustomRoutingListenerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.acceleratorArn">accelerator_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.portRange">port_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerator_arn`<sup>Required</sup> <a name="accelerator_arn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.acceleratorArn"></a>

```python
accelerator_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}.

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.portRange"></a>

```python
port_range: typing.Union[IResolvable, typing.List[GlobalacceleratorCustomRoutingListenerPortRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#port_range GlobalacceleratorCustomRoutingListener#port_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.timeouts"></a>

```python
timeouts: GlobalacceleratorCustomRoutingListenerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#timeouts GlobalacceleratorCustomRoutingListener#timeouts}

---

### GlobalacceleratorCustomRoutingListenerPortRange <a name="GlobalacceleratorCustomRoutingListenerPortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}.

---

### GlobalacceleratorCustomRoutingListenerTimeouts <a name="GlobalacceleratorCustomRoutingListenerTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCustomRoutingListenerPortRangeList <a name="GlobalacceleratorCustomRoutingListenerPortRangeList" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalacceleratorCustomRoutingListenerPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlobalacceleratorCustomRoutingListenerPortRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]]

---


### GlobalacceleratorCustomRoutingListenerPortRangeOutputReference <a name="GlobalacceleratorCustomRoutingListenerPortRangeOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GlobalacceleratorCustomRoutingListenerPortRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>]

---


### GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference <a name="GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_custom_routing_listener

globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GlobalacceleratorCustomRoutingListenerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>]

---



