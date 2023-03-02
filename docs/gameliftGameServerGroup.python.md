# `gameliftGameServerGroup` Submodule <a name="`gameliftGameServerGroup` Submodule" id="@cdktf/provider-aws.gameliftGameServerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameServerGroup <a name="GameliftGameServerGroup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group aws_gamelift_game_server_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  game_server_group_name: str,
  instance_definition: typing.Union[IResolvable, typing.List[GameliftGameServerGroupInstanceDefinition]],
  launch_template: GameliftGameServerGroupLaunchTemplate,
  max_size: typing.Union[int, float],
  min_size: typing.Union[int, float],
  role_arn: str,
  auto_scaling_policy: GameliftGameServerGroupAutoScalingPolicy = None,
  balancing_strategy: str = None,
  game_server_protection_policy: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: GameliftGameServerGroupTimeouts = None,
  vpc_subnets: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.gameServerGroupName">game_server_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.instanceDefinition">instance_definition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]</code> | instance_definition block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.autoScalingPolicy">auto_scaling_policy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | auto_scaling_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.balancingStrategy">balancing_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.gameServerProtectionPolicy">game_server_protection_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.vpcSubnets">vpc_subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `game_server_group_name`<sup>Required</sup> <a name="game_server_group_name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.gameServerGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}.

---

##### `instance_definition`<sup>Required</sup> <a name="instance_definition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.instanceDefinition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]

instance_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_definition GameliftGameServerGroup#instance_definition}

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}.

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}.

---

##### `auto_scaling_policy`<sup>Optional</sup> <a name="auto_scaling_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.autoScalingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

auto_scaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}

---

##### `balancing_strategy`<sup>Optional</sup> <a name="balancing_strategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.balancingStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}.

---

##### `game_server_protection_policy`<sup>Optional</sup> <a name="game_server_protection_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.gameServerProtectionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#timeouts GameliftGameServerGroup#timeouts}

---

##### `vpc_subnets`<sup>Optional</sup> <a name="vpc_subnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.Initializer.parameter.vpcSubnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy">put_auto_scaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition">put_instance_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate">put_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy">reset_auto_scaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy">reset_balancing_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy">reset_game_server_protection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets">reset_vpc_subnets</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auto_scaling_policy` <a name="put_auto_scaling_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy"></a>

```python
def put_auto_scaling_policy(
  target_tracking_configuration: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration,
  estimated_instance_warmup: typing.Union[int, float] = None
) -> None
```

###### `target_tracking_configuration`<sup>Required</sup> <a name="target_tracking_configuration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy.parameter.targetTrackingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}

---

###### `estimated_instance_warmup`<sup>Optional</sup> <a name="estimated_instance_warmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putAutoScalingPolicy.parameter.estimatedInstanceWarmup"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}.

---

##### `put_instance_definition` <a name="put_instance_definition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition"></a>

```python
def put_instance_definition(
  value: typing.Union[IResolvable, typing.List[GameliftGameServerGroupInstanceDefinition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putInstanceDefinition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]

---

##### `put_launch_template` <a name="put_launch_template" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate"></a>

```python
def put_launch_template(
  id: str = None,
  name: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putLaunchTemplate.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}.

---

##### `reset_auto_scaling_policy` <a name="reset_auto_scaling_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetAutoScalingPolicy"></a>

```python
def reset_auto_scaling_policy() -> None
```

##### `reset_balancing_strategy` <a name="reset_balancing_strategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetBalancingStrategy"></a>

```python
def reset_balancing_strategy() -> None
```

##### `reset_game_server_protection_policy` <a name="reset_game_server_protection_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetGameServerProtectionPolicy"></a>

```python
def reset_game_server_protection_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_subnets` <a name="reset_vpc_subnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.resetVpcSubnets"></a>

```python
def reset_vpc_subnets() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn">auto_scaling_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy">auto_scaling_policy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition">instance_definition</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput">auto_scaling_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput">balancing_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput">game_server_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput">game_server_protection_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput">instance_definition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput">launch_template_input</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput">vpc_subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy">balancing_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName">game_server_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy">game_server_protection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets">vpc_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_scaling_group_arn`<sup>Required</sup> <a name="auto_scaling_group_arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingGroupArn"></a>

```python
auto_scaling_group_arn: str
```

- *Type:* str

---

##### `auto_scaling_policy`<sup>Required</sup> <a name="auto_scaling_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicy"></a>

```python
auto_scaling_policy: GameliftGameServerGroupAutoScalingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference">GameliftGameServerGroupAutoScalingPolicyOutputReference</a>

---

##### `instance_definition`<sup>Required</sup> <a name="instance_definition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinition"></a>

```python
instance_definition: GameliftGameServerGroupInstanceDefinitionList
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList">GameliftGameServerGroupInstanceDefinitionList</a>

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplate"></a>

```python
launch_template: GameliftGameServerGroupLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference">GameliftGameServerGroupLaunchTemplateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeouts"></a>

```python
timeouts: GameliftGameServerGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference">GameliftGameServerGroupTimeoutsOutputReference</a>

---

##### `auto_scaling_policy_input`<sup>Optional</sup> <a name="auto_scaling_policy_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.autoScalingPolicyInput"></a>

```python
auto_scaling_policy_input: GameliftGameServerGroupAutoScalingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---

##### `balancing_strategy_input`<sup>Optional</sup> <a name="balancing_strategy_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategyInput"></a>

```python
balancing_strategy_input: str
```

- *Type:* str

---

##### `game_server_group_name_input`<sup>Optional</sup> <a name="game_server_group_name_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupNameInput"></a>

```python
game_server_group_name_input: str
```

- *Type:* str

---

##### `game_server_protection_policy_input`<sup>Optional</sup> <a name="game_server_protection_policy_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicyInput"></a>

```python
game_server_protection_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_definition_input`<sup>Optional</sup> <a name="instance_definition_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.instanceDefinitionInput"></a>

```python
instance_definition_input: typing.Union[IResolvable, typing.List[GameliftGameServerGroupInstanceDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]

---

##### `launch_template_input`<sup>Optional</sup> <a name="launch_template_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.launchTemplateInput"></a>

```python
launch_template_input: GameliftGameServerGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GameliftGameServerGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_subnets_input`<sup>Optional</sup> <a name="vpc_subnets_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnetsInput"></a>

```python
vpc_subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `balancing_strategy`<sup>Required</sup> <a name="balancing_strategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.balancingStrategy"></a>

```python
balancing_strategy: str
```

- *Type:* str

---

##### `game_server_group_name`<sup>Required</sup> <a name="game_server_group_name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerGroupName"></a>

```python
game_server_group_name: str
```

- *Type:* str

---

##### `game_server_protection_policy`<sup>Required</sup> <a name="game_server_protection_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.gameServerProtectionPolicy"></a>

```python
game_server_protection_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_subnets`<sup>Required</sup> <a name="vpc_subnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.vpcSubnets"></a>

```python
vpc_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameServerGroupAutoScalingPolicy <a name="GameliftGameServerGroupAutoScalingPolicy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy(
  target_tracking_configuration: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration,
  estimated_instance_warmup: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration">target_tracking_configuration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | target_tracking_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup">estimated_instance_warmup</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}. |

---

##### `target_tracking_configuration`<sup>Required</sup> <a name="target_tracking_configuration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.targetTrackingConfiguration"></a>

```python
target_tracking_configuration: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}

---

##### `estimated_instance_warmup`<sup>Optional</sup> <a name="estimated_instance_warmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy.property.estimatedInstanceWarmup"></a>

```python
estimated_instance_warmup: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}.

---

### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration(
  target_value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}. |

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}.

---

### GameliftGameServerGroupConfig <a name="GameliftGameServerGroupConfig" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  game_server_group_name: str,
  instance_definition: typing.Union[IResolvable, typing.List[GameliftGameServerGroupInstanceDefinition]],
  launch_template: GameliftGameServerGroupLaunchTemplate,
  max_size: typing.Union[int, float],
  min_size: typing.Union[int, float],
  role_arn: str,
  auto_scaling_policy: GameliftGameServerGroupAutoScalingPolicy = None,
  balancing_strategy: str = None,
  game_server_protection_policy: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: GameliftGameServerGroupTimeouts = None,
  vpc_subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName">game_server_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition">instance_definition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]</code> | instance_definition block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy">auto_scaling_policy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | auto_scaling_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy">balancing_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy">game_server_protection_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets">vpc_subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `game_server_group_name`<sup>Required</sup> <a name="game_server_group_name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerGroupName"></a>

```python
game_server_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}.

---

##### `instance_definition`<sup>Required</sup> <a name="instance_definition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.instanceDefinition"></a>

```python
instance_definition: typing.Union[IResolvable, typing.List[GameliftGameServerGroupInstanceDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]

instance_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_definition GameliftGameServerGroup#instance_definition}

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.launchTemplate"></a>

```python
launch_template: GameliftGameServerGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}.

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}.

---

##### `auto_scaling_policy`<sup>Optional</sup> <a name="auto_scaling_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.autoScalingPolicy"></a>

```python
auto_scaling_policy: GameliftGameServerGroupAutoScalingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

auto_scaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}

---

##### `balancing_strategy`<sup>Optional</sup> <a name="balancing_strategy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.balancingStrategy"></a>

```python
balancing_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}.

---

##### `game_server_protection_policy`<sup>Optional</sup> <a name="game_server_protection_policy" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.gameServerProtectionPolicy"></a>

```python
game_server_protection_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags GameliftGameServerGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.timeouts"></a>

```python
timeouts: GameliftGameServerGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#timeouts GameliftGameServerGroup#timeouts}

---

##### `vpc_subnets`<sup>Optional</sup> <a name="vpc_subnets" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupConfig.property.vpcSubnets"></a>

```python
vpc_subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}.

---

### GameliftGameServerGroupInstanceDefinition <a name="GameliftGameServerGroupInstanceDefinition" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition(
  instance_type: str,
  weighted_capacity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity">weighted_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}. |

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}.

---

##### `weighted_capacity`<sup>Optional</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition.property.weightedCapacity"></a>

```python
weighted_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}.

---

### GameliftGameServerGroupLaunchTemplate <a name="GameliftGameServerGroupLaunchTemplate" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate(
  id: str = None,
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#id GameliftGameServerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#name GameliftGameServerGroup#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#version GameliftGameServerGroup#version}.

---

### GameliftGameServerGroupTimeouts <a name="GameliftGameServerGroupTimeouts" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#create GameliftGameServerGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#delete GameliftGameServerGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameServerGroupAutoScalingPolicyOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration">put_target_tracking_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup">reset_estimated_instance_warmup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_tracking_configuration` <a name="put_target_tracking_configuration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration"></a>

```python
def put_target_tracking_configuration(
  target_value: typing.Union[int, float]
) -> None
```

###### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.putTargetTrackingConfiguration.parameter.targetValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}.

---

##### `reset_estimated_instance_warmup` <a name="reset_estimated_instance_warmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.resetEstimatedInstanceWarmup"></a>

```python
def reset_estimated_instance_warmup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration">target_tracking_configuration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput">estimated_instance_warmup_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput">target_tracking_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup">estimated_instance_warmup</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_tracking_configuration`<sup>Required</sup> <a name="target_tracking_configuration" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfiguration"></a>

```python
target_tracking_configuration: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference</a>

---

##### `estimated_instance_warmup_input`<sup>Optional</sup> <a name="estimated_instance_warmup_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmupInput"></a>

```python
estimated_instance_warmup_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_tracking_configuration_input`<sup>Optional</sup> <a name="target_tracking_configuration_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.targetTrackingConfigurationInput"></a>

```python
target_tracking_configuration_input: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---

##### `estimated_instance_warmup`<sup>Required</sup> <a name="estimated_instance_warmup" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.estimatedInstanceWarmup"></a>

```python
estimated_instance_warmup: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GameliftGameServerGroupAutoScalingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicy">GameliftGameServerGroupAutoScalingPolicy</a>

---


### GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference <a name="GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput">target_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_value_input`<sup>Optional</sup> <a name="target_value_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput"></a>

```python
target_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration">GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration</a>

---


### GameliftGameServerGroupInstanceDefinitionList <a name="GameliftGameServerGroupInstanceDefinitionList" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftGameServerGroupInstanceDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GameliftGameServerGroupInstanceDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>]]

---


### GameliftGameServerGroupInstanceDefinitionOutputReference <a name="GameliftGameServerGroupInstanceDefinitionOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity">reset_weighted_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_weighted_capacity` <a name="reset_weighted_capacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.resetWeightedCapacity"></a>

```python
def reset_weighted_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput">weighted_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity">weighted_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `weighted_capacity_input`<sup>Optional</sup> <a name="weighted_capacity_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacityInput"></a>

```python
weighted_capacity_input: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.weightedCapacity"></a>

```python
weighted_capacity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameliftGameServerGroupInstanceDefinition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupInstanceDefinition">GameliftGameServerGroupInstanceDefinition</a>, cdktf.IResolvable]

---


### GameliftGameServerGroupLaunchTemplateOutputReference <a name="GameliftGameServerGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplateOutputReference.property.internalValue"></a>

```python
internal_value: GameliftGameServerGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupLaunchTemplate">GameliftGameServerGroupLaunchTemplate</a>

---


### GameliftGameServerGroupTimeoutsOutputReference <a name="GameliftGameServerGroupTimeoutsOutputReference" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_game_server_group

gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameliftGameServerGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gameliftGameServerGroup.GameliftGameServerGroupTimeouts">GameliftGameServerGroupTimeouts</a>, cdktf.IResolvable]

---



