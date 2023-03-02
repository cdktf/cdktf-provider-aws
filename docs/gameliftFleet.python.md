# `gameliftFleet` Submodule <a name="`gameliftFleet` Submodule" id="@cdktf/provider-aws.gameliftFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftFleet <a name="GameliftFleet" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet aws_gamelift_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ec2_instance_type: str,
  name: str,
  build_id: str = None,
  certificate_configuration: GameliftFleetCertificateConfiguration = None,
  description: str = None,
  ec2_inbound_permission: typing.Union[IResolvable, typing.List[GameliftFleetEc2InboundPermission]] = None,
  fleet_type: str = None,
  id: str = None,
  instance_role_arn: str = None,
  metric_groups: typing.List[str] = None,
  new_game_session_protection_policy: str = None,
  resource_creation_limit_policy: GameliftFleetResourceCreationLimitPolicy = None,
  runtime_configuration: GameliftFleetRuntimeConfiguration = None,
  script_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: GameliftFleetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InstanceType">ec2_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#name GameliftFleet#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.buildId">build_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#build_id GameliftFleet#build_id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.certificateConfiguration">certificate_configuration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | certificate_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#description GameliftFleet#description}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InboundPermission">ec2_inbound_permission</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]</code> | ec2_inbound_permission block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.fleetType">fleet_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#fleet_type GameliftFleet#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#id GameliftFleet#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleArn">instance_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#metric_groups GameliftFleet#metric_groups}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.resourceCreationLimitPolicy">resource_creation_limit_policy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | resource_creation_limit_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.runtimeConfiguration">runtime_configuration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | runtime_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.scriptId">script_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#script_id GameliftFleet#script_id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags GameliftFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags_all GameliftFleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ec2_instance_type`<sup>Required</sup> <a name="ec2_instance_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InstanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#name GameliftFleet#name}.

---

##### `build_id`<sup>Optional</sup> <a name="build_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.buildId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#build_id GameliftFleet#build_id}.

---

##### `certificate_configuration`<sup>Optional</sup> <a name="certificate_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.certificateConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

certificate_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#description GameliftFleet#description}.

---

##### `ec2_inbound_permission`<sup>Optional</sup> <a name="ec2_inbound_permission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InboundPermission"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]

ec2_inbound_permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}

---

##### `fleet_type`<sup>Optional</sup> <a name="fleet_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.fleetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#fleet_type GameliftFleet#fleet_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#id GameliftFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_role_arn`<sup>Optional</sup> <a name="instance_role_arn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}.

---

##### `metric_groups`<sup>Optional</sup> <a name="metric_groups" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.metricGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#metric_groups GameliftFleet#metric_groups}.

---

##### `new_game_session_protection_policy`<sup>Optional</sup> <a name="new_game_session_protection_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.newGameSessionProtectionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}.

---

##### `resource_creation_limit_policy`<sup>Optional</sup> <a name="resource_creation_limit_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.resourceCreationLimitPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

resource_creation_limit_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `runtime_configuration`<sup>Optional</sup> <a name="runtime_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.runtimeConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

runtime_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `script_id`<sup>Optional</sup> <a name="script_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.scriptId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#script_id GameliftFleet#script_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags GameliftFleet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags_all GameliftFleet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#timeouts GameliftFleet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration">put_certificate_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission">put_ec2_inbound_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy">put_resource_creation_limit_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration">put_runtime_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetBuildId">reset_build_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetCertificateConfiguration">reset_certificate_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetEc2InboundPermission">reset_ec2_inbound_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetFleetType">reset_fleet_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetInstanceRoleArn">reset_instance_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetMetricGroups">reset_metric_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy">reset_new_game_session_protection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy">reset_resource_creation_limit_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetRuntimeConfiguration">reset_runtime_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetScriptId">reset_script_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_certificate_configuration` <a name="put_certificate_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration"></a>

```python
def put_certificate_configuration(
  certificate_type: str = None
) -> None
```

###### `certificate_type`<sup>Optional</sup> <a name="certificate_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration.parameter.certificateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

##### `put_ec2_inbound_permission` <a name="put_ec2_inbound_permission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission"></a>

```python
def put_ec2_inbound_permission(
  value: typing.Union[IResolvable, typing.List[GameliftFleetEc2InboundPermission]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]

---

##### `put_resource_creation_limit_policy` <a name="put_resource_creation_limit_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy"></a>

```python
def put_resource_creation_limit_policy(
  new_game_sessions_per_creator: typing.Union[int, float] = None,
  policy_period_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `new_game_sessions_per_creator`<sup>Optional</sup> <a name="new_game_sessions_per_creator" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.newGameSessionsPerCreator"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}.

---

###### `policy_period_in_minutes`<sup>Optional</sup> <a name="policy_period_in_minutes" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.policyPeriodInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}.

---

##### `put_runtime_configuration` <a name="put_runtime_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration"></a>

```python
def put_runtime_configuration(
  game_session_activation_timeout_seconds: typing.Union[int, float] = None,
  max_concurrent_game_session_activations: typing.Union[int, float] = None,
  server_process: typing.Union[IResolvable, typing.List[GameliftFleetRuntimeConfigurationServerProcess]] = None
) -> None
```

###### `game_session_activation_timeout_seconds`<sup>Optional</sup> <a name="game_session_activation_timeout_seconds" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.gameSessionActivationTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}.

---

###### `max_concurrent_game_session_activations`<sup>Optional</sup> <a name="max_concurrent_game_session_activations" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.maxConcurrentGameSessionActivations"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}.

---

###### `server_process`<sup>Optional</sup> <a name="server_process" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.serverProcess"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>]]

server_process block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#server_process GameliftFleet#server_process}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#create GameliftFleet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#delete GameliftFleet#delete}.

---

##### `reset_build_id` <a name="reset_build_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetBuildId"></a>

```python
def reset_build_id() -> None
```

##### `reset_certificate_configuration` <a name="reset_certificate_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetCertificateConfiguration"></a>

```python
def reset_certificate_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ec2_inbound_permission` <a name="reset_ec2_inbound_permission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetEc2InboundPermission"></a>

```python
def reset_ec2_inbound_permission() -> None
```

##### `reset_fleet_type` <a name="reset_fleet_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetFleetType"></a>

```python
def reset_fleet_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_role_arn` <a name="reset_instance_role_arn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetInstanceRoleArn"></a>

```python
def reset_instance_role_arn() -> None
```

##### `reset_metric_groups` <a name="reset_metric_groups" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetMetricGroups"></a>

```python
def reset_metric_groups() -> None
```

##### `reset_new_game_session_protection_policy` <a name="reset_new_game_session_protection_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy"></a>

```python
def reset_new_game_session_protection_policy() -> None
```

##### `reset_resource_creation_limit_policy` <a name="reset_resource_creation_limit_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy"></a>

```python
def reset_resource_creation_limit_policy() -> None
```

##### `reset_runtime_configuration` <a name="reset_runtime_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetRuntimeConfiguration"></a>

```python
def reset_runtime_configuration() -> None
```

##### `reset_script_id` <a name="reset_script_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetScriptId"></a>

```python
def reset_script_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildArn">build_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfiguration">certificate_configuration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermission">ec2_inbound_permission</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList">GameliftFleetEc2InboundPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.logPaths">log_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy">resource_creation_limit_policy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfiguration">runtime_configuration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptArn">script_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference">GameliftFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildIdInput">build_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfigurationInput">certificate_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermissionInput">ec2_inbound_permission_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput">ec2_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fleetTypeInput">fleet_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArnInput">instance_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.metricGroupsInput">metric_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput">new_game_session_protection_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput">resource_creation_limit_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput">runtime_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptIdInput">script_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildId">build_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceType">ec2_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fleetType">fleet_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArn">instance_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptId">script_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `build_arn`<sup>Required</sup> <a name="build_arn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildArn"></a>

```python
build_arn: str
```

- *Type:* str

---

##### `certificate_configuration`<sup>Required</sup> <a name="certificate_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfiguration"></a>

```python
certificate_configuration: GameliftFleetCertificateConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a>

---

##### `ec2_inbound_permission`<sup>Required</sup> <a name="ec2_inbound_permission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermission"></a>

```python
ec2_inbound_permission: GameliftFleetEc2InboundPermissionList
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList">GameliftFleetEc2InboundPermissionList</a>

---

##### `log_paths`<sup>Required</sup> <a name="log_paths" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.logPaths"></a>

```python
log_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `resource_creation_limit_policy`<sup>Required</sup> <a name="resource_creation_limit_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy"></a>

```python
resource_creation_limit_policy: GameliftFleetResourceCreationLimitPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a>

---

##### `runtime_configuration`<sup>Required</sup> <a name="runtime_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfiguration"></a>

```python
runtime_configuration: GameliftFleetRuntimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a>

---

##### `script_arn`<sup>Required</sup> <a name="script_arn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptArn"></a>

```python
script_arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.timeouts"></a>

```python
timeouts: GameliftFleetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference">GameliftFleetTimeoutsOutputReference</a>

---

##### `build_id_input`<sup>Optional</sup> <a name="build_id_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildIdInput"></a>

```python
build_id_input: str
```

- *Type:* str

---

##### `certificate_configuration_input`<sup>Optional</sup> <a name="certificate_configuration_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfigurationInput"></a>

```python
certificate_configuration_input: GameliftFleetCertificateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ec2_inbound_permission_input`<sup>Optional</sup> <a name="ec2_inbound_permission_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermissionInput"></a>

```python
ec2_inbound_permission_input: typing.Union[IResolvable, typing.List[GameliftFleetEc2InboundPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]

---

##### `ec2_instance_type_input`<sup>Optional</sup> <a name="ec2_instance_type_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput"></a>

```python
ec2_instance_type_input: str
```

- *Type:* str

---

##### `fleet_type_input`<sup>Optional</sup> <a name="fleet_type_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fleetTypeInput"></a>

```python
fleet_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_role_arn_input`<sup>Optional</sup> <a name="instance_role_arn_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArnInput"></a>

```python
instance_role_arn_input: str
```

- *Type:* str

---

##### `metric_groups_input`<sup>Optional</sup> <a name="metric_groups_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.metricGroupsInput"></a>

```python
metric_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `new_game_session_protection_policy_input`<sup>Optional</sup> <a name="new_game_session_protection_policy_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput"></a>

```python
new_game_session_protection_policy_input: str
```

- *Type:* str

---

##### `resource_creation_limit_policy_input`<sup>Optional</sup> <a name="resource_creation_limit_policy_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput"></a>

```python
resource_creation_limit_policy_input: GameliftFleetResourceCreationLimitPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `runtime_configuration_input`<sup>Optional</sup> <a name="runtime_configuration_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput"></a>

```python
runtime_configuration_input: GameliftFleetRuntimeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `script_id_input`<sup>Optional</sup> <a name="script_id_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptIdInput"></a>

```python
script_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GameliftFleetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>, cdktf.IResolvable]

---

##### `build_id`<sup>Required</sup> <a name="build_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ec2_instance_type`<sup>Required</sup> <a name="ec2_instance_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceType"></a>

```python
ec2_instance_type: str
```

- *Type:* str

---

##### `fleet_type`<sup>Required</sup> <a name="fleet_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.fleetType"></a>

```python
fleet_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_role_arn`<sup>Required</sup> <a name="instance_role_arn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArn"></a>

```python
instance_role_arn: str
```

- *Type:* str

---

##### `metric_groups`<sup>Required</sup> <a name="metric_groups" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.metricGroups"></a>

```python
metric_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `new_game_session_protection_policy`<sup>Required</sup> <a name="new_game_session_protection_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy"></a>

```python
new_game_session_protection_policy: str
```

- *Type:* str

---

##### `script_id`<sup>Required</sup> <a name="script_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gameliftFleet.GameliftFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftFleetCertificateConfiguration <a name="GameliftFleetCertificateConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetCertificateConfiguration(
  certificate_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType">certificate_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_type GameliftFleet#certificate_type}. |

---

##### `certificate_type`<sup>Optional</sup> <a name="certificate_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType"></a>

```python
certificate_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

### GameliftFleetConfig <a name="GameliftFleetConfig" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ec2_instance_type: str,
  name: str,
  build_id: str = None,
  certificate_configuration: GameliftFleetCertificateConfiguration = None,
  description: str = None,
  ec2_inbound_permission: typing.Union[IResolvable, typing.List[GameliftFleetEc2InboundPermission]] = None,
  fleet_type: str = None,
  id: str = None,
  instance_role_arn: str = None,
  metric_groups: typing.List[str] = None,
  new_game_session_protection_policy: str = None,
  resource_creation_limit_policy: GameliftFleetResourceCreationLimitPolicy = None,
  runtime_configuration: GameliftFleetRuntimeConfiguration = None,
  script_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: GameliftFleetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType">ec2_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#name GameliftFleet#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.buildId">build_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#build_id GameliftFleet#build_id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration">certificate_configuration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | certificate_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#description GameliftFleet#description}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermission">ec2_inbound_permission</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]</code> | ec2_inbound_permission block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.fleetType">fleet_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#fleet_type GameliftFleet#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#id GameliftFleet#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn">instance_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#metric_groups GameliftFleet#metric_groups}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy">resource_creation_limit_policy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | resource_creation_limit_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration">runtime_configuration</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | runtime_configuration block. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.scriptId">script_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#script_id GameliftFleet#script_id}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags GameliftFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags_all GameliftFleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ec2_instance_type`<sup>Required</sup> <a name="ec2_instance_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType"></a>

```python
ec2_instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#name GameliftFleet#name}.

---

##### `build_id`<sup>Optional</sup> <a name="build_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#build_id GameliftFleet#build_id}.

---

##### `certificate_configuration`<sup>Optional</sup> <a name="certificate_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration"></a>

```python
certificate_configuration: GameliftFleetCertificateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

certificate_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#description GameliftFleet#description}.

---

##### `ec2_inbound_permission`<sup>Optional</sup> <a name="ec2_inbound_permission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermission"></a>

```python
ec2_inbound_permission: typing.Union[IResolvable, typing.List[GameliftFleetEc2InboundPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]

ec2_inbound_permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}

---

##### `fleet_type`<sup>Optional</sup> <a name="fleet_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.fleetType"></a>

```python
fleet_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#fleet_type GameliftFleet#fleet_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#id GameliftFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_role_arn`<sup>Optional</sup> <a name="instance_role_arn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn"></a>

```python
instance_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}.

---

##### `metric_groups`<sup>Optional</sup> <a name="metric_groups" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.metricGroups"></a>

```python
metric_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#metric_groups GameliftFleet#metric_groups}.

---

##### `new_game_session_protection_policy`<sup>Optional</sup> <a name="new_game_session_protection_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy"></a>

```python
new_game_session_protection_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}.

---

##### `resource_creation_limit_policy`<sup>Optional</sup> <a name="resource_creation_limit_policy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy"></a>

```python
resource_creation_limit_policy: GameliftFleetResourceCreationLimitPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

resource_creation_limit_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `runtime_configuration`<sup>Optional</sup> <a name="runtime_configuration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration"></a>

```python
runtime_configuration: GameliftFleetRuntimeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

runtime_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `script_id`<sup>Optional</sup> <a name="script_id" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#script_id GameliftFleet#script_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags GameliftFleet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags_all GameliftFleet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetConfig.property.timeouts"></a>

```python
timeouts: GameliftFleetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#timeouts GameliftFleet#timeouts}

---

### GameliftFleetEc2InboundPermission <a name="GameliftFleetEc2InboundPermission" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetEc2InboundPermission(
  from_port: typing.Union[int, float],
  ip_range: str,
  protocol: str,
  to_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#from_port GameliftFleet#from_port}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.ipRange">ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ip_range GameliftFleet#ip_range}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#protocol GameliftFleet#protocol}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#to_port GameliftFleet#to_port}. |

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#from_port GameliftFleet#from_port}.

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ip_range GameliftFleet#ip_range}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#protocol GameliftFleet#protocol}.

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#to_port GameliftFleet#to_port}.

---

### GameliftFleetResourceCreationLimitPolicy <a name="GameliftFleetResourceCreationLimitPolicy" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetResourceCreationLimitPolicy(
  new_game_sessions_per_creator: typing.Union[int, float] = None,
  policy_period_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator">new_game_sessions_per_creator</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes">policy_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}. |

---

##### `new_game_sessions_per_creator`<sup>Optional</sup> <a name="new_game_sessions_per_creator" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```python
new_game_sessions_per_creator: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}.

---

##### `policy_period_in_minutes`<sup>Optional</sup> <a name="policy_period_in_minutes" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```python
policy_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}.

---

### GameliftFleetRuntimeConfiguration <a name="GameliftFleetRuntimeConfiguration" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfiguration(
  game_session_activation_timeout_seconds: typing.Union[int, float] = None,
  max_concurrent_game_session_activations: typing.Union[int, float] = None,
  server_process: typing.Union[IResolvable, typing.List[GameliftFleetRuntimeConfigurationServerProcess]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds">game_session_activation_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations">max_concurrent_game_session_activations</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcess">server_process</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>]]</code> | server_process block. |

---

##### `game_session_activation_timeout_seconds`<sup>Optional</sup> <a name="game_session_activation_timeout_seconds" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

```python
game_session_activation_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}.

---

##### `max_concurrent_game_session_activations`<sup>Optional</sup> <a name="max_concurrent_game_session_activations" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

```python
max_concurrent_game_session_activations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}.

---

##### `server_process`<sup>Optional</sup> <a name="server_process" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcess"></a>

```python
server_process: typing.Union[IResolvable, typing.List[GameliftFleetRuntimeConfigurationServerProcess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>]]

server_process block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#server_process GameliftFleet#server_process}

---

### GameliftFleetRuntimeConfigurationServerProcess <a name="GameliftFleetRuntimeConfigurationServerProcess" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess(
  concurrent_executions: typing.Union[int, float],
  launch_path: str,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.concurrentExecutions">concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.launchPath">launch_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#launch_path GameliftFleet#launch_path}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#parameters GameliftFleet#parameters}. |

---

##### `concurrent_executions`<sup>Required</sup> <a name="concurrent_executions" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.concurrentExecutions"></a>

```python
concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}.

---

##### `launch_path`<sup>Required</sup> <a name="launch_path" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.launchPath"></a>

```python
launch_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#launch_path GameliftFleet#launch_path}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#parameters GameliftFleet#parameters}.

---

### GameliftFleetTimeouts <a name="GameliftFleetTimeouts" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#create GameliftFleet#create}. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#delete GameliftFleet#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#create GameliftFleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#delete GameliftFleet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftFleetCertificateConfigurationOutputReference <a name="GameliftFleetCertificateConfigurationOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetCertificateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType">reset_certificate_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_type` <a name="reset_certificate_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType"></a>

```python
def reset_certificate_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput">certificate_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType">certificate_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_type_input`<sup>Optional</sup> <a name="certificate_type_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput"></a>

```python
certificate_type_input: str
```

- *Type:* str

---

##### `certificate_type`<sup>Required</sup> <a name="certificate_type" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType"></a>

```python
certificate_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GameliftFleetCertificateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---


### GameliftFleetEc2InboundPermissionList <a name="GameliftFleetEc2InboundPermissionList" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetEc2InboundPermissionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftFleetEc2InboundPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GameliftFleetEc2InboundPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>]]

---


### GameliftFleetEc2InboundPermissionOutputReference <a name="GameliftFleetEc2InboundPermissionOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameliftFleetEc2InboundPermission, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>, cdktf.IResolvable]

---


### GameliftFleetResourceCreationLimitPolicyOutputReference <a name="GameliftFleetResourceCreationLimitPolicyOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">reset_new_game_sessions_per_creator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">reset_policy_period_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_new_game_sessions_per_creator` <a name="reset_new_game_sessions_per_creator" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```python
def reset_new_game_sessions_per_creator() -> None
```

##### `reset_policy_period_in_minutes` <a name="reset_policy_period_in_minutes" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```python
def reset_policy_period_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">new_game_sessions_per_creator_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">policy_period_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">new_game_sessions_per_creator</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">policy_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_game_sessions_per_creator_input`<sup>Optional</sup> <a name="new_game_sessions_per_creator_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```python
new_game_sessions_per_creator_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_period_in_minutes_input`<sup>Optional</sup> <a name="policy_period_in_minutes_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```python
policy_period_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `new_game_sessions_per_creator`<sup>Required</sup> <a name="new_game_sessions_per_creator" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```python
new_game_sessions_per_creator: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_period_in_minutes`<sup>Required</sup> <a name="policy_period_in_minutes" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```python
policy_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GameliftFleetResourceCreationLimitPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---


### GameliftFleetRuntimeConfigurationOutputReference <a name="GameliftFleetRuntimeConfigurationOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess">put_server_process</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds">reset_game_session_activation_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations">reset_max_concurrent_game_session_activations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcess">reset_server_process</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_server_process` <a name="put_server_process" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess"></a>

```python
def put_server_process(
  value: typing.Union[IResolvable, typing.List[GameliftFleetRuntimeConfigurationServerProcess]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>]]

---

##### `reset_game_session_activation_timeout_seconds` <a name="reset_game_session_activation_timeout_seconds" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds"></a>

```python
def reset_game_session_activation_timeout_seconds() -> None
```

##### `reset_max_concurrent_game_session_activations` <a name="reset_max_concurrent_game_session_activations" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations"></a>

```python
def reset_max_concurrent_game_session_activations() -> None
```

##### `reset_server_process` <a name="reset_server_process" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcess"></a>

```python
def reset_server_process() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcess">server_process</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList">GameliftFleetRuntimeConfigurationServerProcessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput">game_session_activation_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput">max_concurrent_game_session_activations_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessInput">server_process_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds">game_session_activation_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations">max_concurrent_game_session_activations</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_process`<sup>Required</sup> <a name="server_process" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcess"></a>

```python
server_process: GameliftFleetRuntimeConfigurationServerProcessList
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList">GameliftFleetRuntimeConfigurationServerProcessList</a>

---

##### `game_session_activation_timeout_seconds_input`<sup>Optional</sup> <a name="game_session_activation_timeout_seconds_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput"></a>

```python
game_session_activation_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_game_session_activations_input`<sup>Optional</sup> <a name="max_concurrent_game_session_activations_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput"></a>

```python
max_concurrent_game_session_activations_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_process_input`<sup>Optional</sup> <a name="server_process_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessInput"></a>

```python
server_process_input: typing.Union[IResolvable, typing.List[GameliftFleetRuntimeConfigurationServerProcess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>]]

---

##### `game_session_activation_timeout_seconds`<sup>Required</sup> <a name="game_session_activation_timeout_seconds" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds"></a>

```python
game_session_activation_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_game_session_activations`<sup>Required</sup> <a name="max_concurrent_game_session_activations" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations"></a>

```python
max_concurrent_game_session_activations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GameliftFleetRuntimeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---


### GameliftFleetRuntimeConfigurationServerProcessList <a name="GameliftFleetRuntimeConfigurationServerProcessList" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftFleetRuntimeConfigurationServerProcessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GameliftFleetRuntimeConfigurationServerProcess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>]]

---


### GameliftFleetRuntimeConfigurationServerProcessOutputReference <a name="GameliftFleetRuntimeConfigurationServerProcessOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutionsInput">concurrent_executions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPathInput">launch_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutions">concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPath">launch_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrent_executions_input`<sup>Optional</sup> <a name="concurrent_executions_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutionsInput"></a>

```python
concurrent_executions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `launch_path_input`<sup>Optional</sup> <a name="launch_path_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPathInput"></a>

```python
launch_path_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `concurrent_executions`<sup>Required</sup> <a name="concurrent_executions" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutions"></a>

```python
concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `launch_path`<sup>Required</sup> <a name="launch_path" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPath"></a>

```python
launch_path: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameliftFleetRuntimeConfigurationServerProcess, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>, cdktf.IResolvable]

---


### GameliftFleetTimeoutsOutputReference <a name="GameliftFleetTimeoutsOutputReference" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import gamelift_fleet

gameliftFleet.GameliftFleetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GameliftFleetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>, cdktf.IResolvable]

---



