# `cloudwatchEventEndpoint` Submodule <a name="`cloudwatchEventEndpoint` Submodule" id="@cdktf/provider-aws.cloudwatchEventEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventEndpoint <a name="CloudwatchEventEndpoint" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_bus: typing.Union[IResolvable, typing.List[CloudwatchEventEndpointEventBus]],
  name: str,
  routing_config: CloudwatchEventEndpointRoutingConfig,
  description: str = None,
  id: str = None,
  replication_config: CloudwatchEventEndpointReplicationConfig = None,
  role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.eventBus">event_bus</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]</code> | event_bus block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.routingConfig">routing_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | routing_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.replicationConfig">replication_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | replication_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_bus`<sup>Required</sup> <a name="event_bus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.eventBus"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]

event_bus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#event_bus CloudwatchEventEndpoint#event_bus}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}.

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.routingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#routing_config CloudwatchEventEndpoint#routing_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_config`<sup>Optional</sup> <a name="replication_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.replicationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#replication_config CloudwatchEventEndpoint#replication_config}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus">put_event_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig">put_replication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig">put_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetReplicationConfig">reset_replication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_bus` <a name="put_event_bus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus"></a>

```python
def put_event_bus(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventEndpointEventBus]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]

---

##### `put_replication_config` <a name="put_replication_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig"></a>

```python
def put_replication_config(
  state: str = None
) -> None
```

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}.

---

##### `put_routing_config` <a name="put_routing_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig"></a>

```python
def put_routing_config(
  failover_config: CloudwatchEventEndpointRoutingConfigFailoverConfig
) -> None
```

###### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig.parameter.failoverConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#failover_config CloudwatchEventEndpoint#failover_config}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replication_config` <a name="reset_replication_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetReplicationConfig"></a>

```python
def reset_replication_config() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudwatchEventEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudwatchEventEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchEventEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchEventEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchEventEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBus">event_bus</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList">CloudwatchEventEndpointEventBusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfig">replication_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference">CloudwatchEventEndpointReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference">CloudwatchEventEndpointRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBusInput">event_bus_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfigInput">replication_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfigInput">routing_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `event_bus`<sup>Required</sup> <a name="event_bus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBus"></a>

```python
event_bus: CloudwatchEventEndpointEventBusList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList">CloudwatchEventEndpointEventBusList</a>

---

##### `replication_config`<sup>Required</sup> <a name="replication_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfig"></a>

```python
replication_config: CloudwatchEventEndpointReplicationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference">CloudwatchEventEndpointReplicationConfigOutputReference</a>

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfig"></a>

```python
routing_config: CloudwatchEventEndpointRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference">CloudwatchEventEndpointRoutingConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_bus_input`<sup>Optional</sup> <a name="event_bus_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBusInput"></a>

```python
event_bus_input: typing.Union[IResolvable, typing.List[CloudwatchEventEndpointEventBus]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replication_config_input`<sup>Optional</sup> <a name="replication_config_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfigInput"></a>

```python
replication_config_input: CloudwatchEventEndpointReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `routing_config_input`<sup>Optional</sup> <a name="routing_config_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfigInput"></a>

```python
routing_config_input: CloudwatchEventEndpointRoutingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventEndpointConfig <a name="CloudwatchEventEndpointConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_bus: typing.Union[IResolvable, typing.List[CloudwatchEventEndpointEventBus]],
  name: str,
  routing_config: CloudwatchEventEndpointRoutingConfig,
  description: str = None,
  id: str = None,
  replication_config: CloudwatchEventEndpointReplicationConfig = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.eventBus">event_bus</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]</code> | event_bus block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | routing_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.replicationConfig">replication_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | replication_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_bus`<sup>Required</sup> <a name="event_bus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.eventBus"></a>

```python
event_bus: typing.Union[IResolvable, typing.List[CloudwatchEventEndpointEventBus]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]

event_bus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#event_bus CloudwatchEventEndpoint#event_bus}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}.

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.routingConfig"></a>

```python
routing_config: CloudwatchEventEndpointRoutingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#routing_config CloudwatchEventEndpoint#routing_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_config`<sup>Optional</sup> <a name="replication_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.replicationConfig"></a>

```python
replication_config: CloudwatchEventEndpointReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#replication_config CloudwatchEventEndpoint#replication_config}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}.

---

### CloudwatchEventEndpointEventBus <a name="CloudwatchEventEndpointEventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus(
  event_bus_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#event_bus_arn CloudwatchEventEndpoint#event_bus_arn}. |

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#event_bus_arn CloudwatchEventEndpoint#event_bus_arn}.

---

### CloudwatchEventEndpointReplicationConfig <a name="CloudwatchEventEndpointReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig(
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}.

---

### CloudwatchEventEndpointRoutingConfig <a name="CloudwatchEventEndpointRoutingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig(
  failover_config: CloudwatchEventEndpointRoutingConfigFailoverConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | failover_config block. |

---

##### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.property.failoverConfig"></a>

```python
failover_config: CloudwatchEventEndpointRoutingConfigFailoverConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#failover_config CloudwatchEventEndpoint#failover_config}

---

### CloudwatchEventEndpointRoutingConfigFailoverConfig <a name="CloudwatchEventEndpointRoutingConfigFailoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig(
  primary: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary,
  secondary: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | primary block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.secondary">secondary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | secondary block. |

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.primary"></a>

```python
primary: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#primary CloudwatchEventEndpoint#primary}

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.secondary"></a>

```python
secondary: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

secondary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#secondary CloudwatchEventEndpoint#secondary}

---

### CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary(
  health_check: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck">health_check</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}. |

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}.

---

### CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary(
  route: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.property.route">route</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}. |

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.property.route"></a>

```python
route: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventEndpointEventBusList <a name="CloudwatchEventEndpointEventBusList" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventEndpointEventBusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventEndpointEventBus]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]]

---


### CloudwatchEventEndpointEventBusOutputReference <a name="CloudwatchEventEndpointEventBusOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArnInput">event_bus_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_arn_input`<sup>Optional</sup> <a name="event_bus_arn_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArnInput"></a>

```python
event_bus_arn_input: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudwatchEventEndpointEventBus]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus">CloudwatchEventEndpointEventBus</a>]

---


### CloudwatchEventEndpointReplicationConfigOutputReference <a name="CloudwatchEventEndpointReplicationConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventEndpointReplicationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary">put_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary">put_secondary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary` <a name="put_primary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary"></a>

```python
def put_primary(
  health_check: str = None
) -> None
```

###### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary.parameter.healthCheck"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}.

---

##### `put_secondary` <a name="put_secondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary"></a>

```python
def put_secondary(
  route: str = None
) -> None
```

###### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary.parameter.route"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondary">secondary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput">primary_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput">secondary_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primary"></a>

```python
primary: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a>

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondary"></a>

```python
secondary: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a>

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput"></a>

```python
primary_input: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

---

##### `secondary_input`<sup>Optional</sup> <a name="secondary_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput"></a>

```python
secondary_input: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventEndpointRoutingConfigFailoverConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resetHealthCheck">reset_health_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput">health_check_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck">health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput"></a>

```python
health_check_input: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resetRoute">reset_route</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_route` <a name="reset_route" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resetRoute"></a>

```python
def reset_route() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput">route_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route">route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput"></a>

```python
route_input: str
```

- *Type:* str

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route"></a>

```python
route: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

---


### CloudwatchEventEndpointRoutingConfigOutputReference <a name="CloudwatchEventEndpointRoutingConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_endpoint

cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig">put_failover_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_failover_config` <a name="put_failover_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig"></a>

```python
def put_failover_config(
  primary: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary,
  secondary: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary
) -> None
```

###### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig.parameter.primary"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#primary CloudwatchEventEndpoint#primary}

---

###### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig.parameter.secondary"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

secondary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/cloudwatch_event_endpoint#secondary CloudwatchEventEndpoint#secondary}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfigInput">failover_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfig"></a>

```python
failover_config: CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference</a>

---

##### `failover_config_input`<sup>Optional</sup> <a name="failover_config_input" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfigInput"></a>

```python
failover_config_input: CloudwatchEventEndpointRoutingConfigFailoverConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventEndpointRoutingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

---



