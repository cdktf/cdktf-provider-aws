# `eksNodeGroup` Submodule <a name="`eksNodeGroup` Submodule" id="@cdktf/provider-aws.eksNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksNodeGroup <a name="EksNodeGroup" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group aws_eks_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  node_role_arn: str,
  scaling_config: EksNodeGroupScalingConfig,
  subnet_ids: typing.List[str],
  ami_type: str = None,
  capacity_type: str = None,
  disk_size: typing.Union[int, float] = None,
  force_update_version: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_types: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  launch_template: EksNodeGroupLaunchTemplate = None,
  node_group_name: str = None,
  node_group_name_prefix: str = None,
  release_version: str = None,
  remote_access: EksNodeGroupRemoteAccess = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  taint: typing.Union[IResolvable, typing.List[EksNodeGroupTaint]] = None,
  timeouts: EksNodeGroupTimeouts = None,
  update_config: EksNodeGroupUpdateConfig = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#cluster_name EksNodeGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.nodeRoleArn">node_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.amiType">ami_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ami_type EksNodeGroup#ami_type}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.capacityType">capacity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#capacity_type EksNodeGroup#capacity_type}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#disk_size EksNodeGroup#disk_size}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.forceUpdateVersion">force_update_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#force_update_version EksNodeGroup#force_update_version}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#instance_types EksNodeGroup#instance_types}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#labels EksNodeGroup#labels}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.nodeGroupName">node_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name EksNodeGroup#node_group_name}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.nodeGroupNamePrefix">node_group_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.releaseVersion">release_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#release_version EksNodeGroup#release_version}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.remoteAccess">remote_access</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | remote_access block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags EksNodeGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags_all EksNodeGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.taint">taint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]</code> | taint block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.updateConfig">update_config</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | update_config block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#cluster_name EksNodeGroup#cluster_name}.

---

##### `node_role_arn`<sup>Required</sup> <a name="node_role_arn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.nodeRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}.

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.scalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#scaling_config EksNodeGroup#scaling_config}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}.

---

##### `ami_type`<sup>Optional</sup> <a name="ami_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.amiType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ami_type EksNodeGroup#ami_type}.

---

##### `capacity_type`<sup>Optional</sup> <a name="capacity_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.capacityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#capacity_type EksNodeGroup#capacity_type}.

---

##### `disk_size`<sup>Optional</sup> <a name="disk_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.diskSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#disk_size EksNodeGroup#disk_size}.

---

##### `force_update_version`<sup>Optional</sup> <a name="force_update_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.forceUpdateVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#force_update_version EksNodeGroup#force_update_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_types`<sup>Optional</sup> <a name="instance_types" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.instanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#instance_types EksNodeGroup#instance_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#labels EksNodeGroup#labels}.

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#launch_template EksNodeGroup#launch_template}

---

##### `node_group_name`<sup>Optional</sup> <a name="node_group_name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.nodeGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name EksNodeGroup#node_group_name}.

---

##### `node_group_name_prefix`<sup>Optional</sup> <a name="node_group_name_prefix" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.nodeGroupNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}.

---

##### `release_version`<sup>Optional</sup> <a name="release_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.releaseVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#release_version EksNodeGroup#release_version}.

---

##### `remote_access`<sup>Optional</sup> <a name="remote_access" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.remoteAccess"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

remote_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#remote_access EksNodeGroup#remote_access}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags EksNodeGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags_all EksNodeGroup#tags_all}.

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.taint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]

taint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#taint EksNodeGroup#taint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#timeouts EksNodeGroup#timeouts}

---

##### `update_config`<sup>Optional</sup> <a name="update_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.updateConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#update_config EksNodeGroup#update_config}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putLaunchTemplate">put_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putRemoteAccess">put_remote_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putScalingConfig">put_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTaint">put_taint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putUpdateConfig">put_update_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetAmiType">reset_ami_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetCapacityType">reset_capacity_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetDiskSize">reset_disk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetForceUpdateVersion">reset_force_update_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetInstanceTypes">reset_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetLaunchTemplate">reset_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetNodeGroupName">reset_node_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetNodeGroupNamePrefix">reset_node_group_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetReleaseVersion">reset_release_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetRemoteAccess">reset_remote_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTaint">reset_taint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetUpdateConfig">reset_update_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_launch_template` <a name="put_launch_template" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putLaunchTemplate"></a>

```python
def put_launch_template(
  version: str,
  id: str = None,
  name: str = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putLaunchTemplate.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putLaunchTemplate.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putLaunchTemplate.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#name EksNodeGroup#name}.

---

##### `put_remote_access` <a name="put_remote_access" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putRemoteAccess"></a>

```python
def put_remote_access(
  ec2_ssh_key: str = None,
  source_security_group_ids: typing.List[str] = None
) -> None
```

###### `ec2_ssh_key`<sup>Optional</sup> <a name="ec2_ssh_key" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putRemoteAccess.parameter.ec2SshKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}.

---

###### `source_security_group_ids`<sup>Optional</sup> <a name="source_security_group_ids" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putRemoteAccess.parameter.sourceSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}.

---

##### `put_scaling_config` <a name="put_scaling_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putScalingConfig"></a>

```python
def put_scaling_config(
  desired_size: typing.Union[int, float],
  max_size: typing.Union[int, float],
  min_size: typing.Union[int, float]
) -> None
```

###### `desired_size`<sup>Required</sup> <a name="desired_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putScalingConfig.parameter.desiredSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#desired_size EksNodeGroup#desired_size}.

---

###### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putScalingConfig.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_size EksNodeGroup#max_size}.

---

###### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putScalingConfig.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#min_size EksNodeGroup#min_size}.

---

##### `put_taint` <a name="put_taint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTaint"></a>

```python
def put_taint(
  value: typing.Union[IResolvable, typing.List[EksNodeGroupTaint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTaint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#create EksNodeGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#delete EksNodeGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#update EksNodeGroup#update}.

---

##### `put_update_config` <a name="put_update_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putUpdateConfig"></a>

```python
def put_update_config(
  max_unavailable: typing.Union[int, float] = None,
  max_unavailable_percentage: typing.Union[int, float] = None
) -> None
```

###### `max_unavailable`<sup>Optional</sup> <a name="max_unavailable" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putUpdateConfig.parameter.maxUnavailable"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}.

---

###### `max_unavailable_percentage`<sup>Optional</sup> <a name="max_unavailable_percentage" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.putUpdateConfig.parameter.maxUnavailablePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}.

---

##### `reset_ami_type` <a name="reset_ami_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetAmiType"></a>

```python
def reset_ami_type() -> None
```

##### `reset_capacity_type` <a name="reset_capacity_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetCapacityType"></a>

```python
def reset_capacity_type() -> None
```

##### `reset_disk_size` <a name="reset_disk_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetDiskSize"></a>

```python
def reset_disk_size() -> None
```

##### `reset_force_update_version` <a name="reset_force_update_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetForceUpdateVersion"></a>

```python
def reset_force_update_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_types` <a name="reset_instance_types" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetInstanceTypes"></a>

```python
def reset_instance_types() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_launch_template` <a name="reset_launch_template" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetLaunchTemplate"></a>

```python
def reset_launch_template() -> None
```

##### `reset_node_group_name` <a name="reset_node_group_name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetNodeGroupName"></a>

```python
def reset_node_group_name() -> None
```

##### `reset_node_group_name_prefix` <a name="reset_node_group_name_prefix" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetNodeGroupNamePrefix"></a>

```python
def reset_node_group_name_prefix() -> None
```

##### `reset_release_version` <a name="reset_release_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetReleaseVersion"></a>

```python
def reset_release_version() -> None
```

##### `reset_remote_access` <a name="reset_remote_access" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetRemoteAccess"></a>

```python
def reset_remote_access() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_taint` <a name="reset_taint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTaint"></a>

```python
def reset_taint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_config` <a name="reset_update_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetUpdateConfig"></a>

```python
def reset_update_config() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference">EksNodeGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.remoteAccess">remote_access</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference">EksNodeGroupRemoteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList">EksNodeGroupResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference">EksNodeGroupScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList">EksNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference">EksNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.updateConfig">update_config</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference">EksNodeGroupUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.amiTypeInput">ami_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.capacityTypeInput">capacity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.diskSizeInput">disk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forceUpdateVersionInput">force_update_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.instanceTypesInput">instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.launchTemplateInput">launch_template_input</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNameInput">node_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefixInput">node_group_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeRoleArnInput">node_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.releaseVersionInput">release_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.remoteAccessInput">remote_access_input</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.scalingConfigInput">scaling_config_input</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.taintInput">taint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.updateConfigInput">update_config_input</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.amiType">ami_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.capacityType">capacity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forceUpdateVersion">force_update_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupName">node_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefix">node_group_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeRoleArn">node_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.releaseVersion">release_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.launchTemplate"></a>

```python
launch_template: EksNodeGroupLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference">EksNodeGroupLaunchTemplateOutputReference</a>

---

##### `remote_access`<sup>Required</sup> <a name="remote_access" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.remoteAccess"></a>

```python
remote_access: EksNodeGroupRemoteAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference">EksNodeGroupRemoteAccessOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.resources"></a>

```python
resources: EksNodeGroupResourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList">EksNodeGroupResourcesList</a>

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.scalingConfig"></a>

```python
scaling_config: EksNodeGroupScalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference">EksNodeGroupScalingConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.taint"></a>

```python
taint: EksNodeGroupTaintList
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList">EksNodeGroupTaintList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.timeouts"></a>

```python
timeouts: EksNodeGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference">EksNodeGroupTimeoutsOutputReference</a>

---

##### `update_config`<sup>Required</sup> <a name="update_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.updateConfig"></a>

```python
update_config: EksNodeGroupUpdateConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference">EksNodeGroupUpdateConfigOutputReference</a>

---

##### `ami_type_input`<sup>Optional</sup> <a name="ami_type_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.amiTypeInput"></a>

```python
ami_type_input: str
```

- *Type:* str

---

##### `capacity_type_input`<sup>Optional</sup> <a name="capacity_type_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.capacityTypeInput"></a>

```python
capacity_type_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `disk_size_input`<sup>Optional</sup> <a name="disk_size_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.diskSizeInput"></a>

```python
disk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_update_version_input`<sup>Optional</sup> <a name="force_update_version_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forceUpdateVersionInput"></a>

```python
force_update_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_types_input`<sup>Optional</sup> <a name="instance_types_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.instanceTypesInput"></a>

```python
instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_template_input`<sup>Optional</sup> <a name="launch_template_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.launchTemplateInput"></a>

```python
launch_template_input: EksNodeGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

---

##### `node_group_name_input`<sup>Optional</sup> <a name="node_group_name_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNameInput"></a>

```python
node_group_name_input: str
```

- *Type:* str

---

##### `node_group_name_prefix_input`<sup>Optional</sup> <a name="node_group_name_prefix_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefixInput"></a>

```python
node_group_name_prefix_input: str
```

- *Type:* str

---

##### `node_role_arn_input`<sup>Optional</sup> <a name="node_role_arn_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeRoleArnInput"></a>

```python
node_role_arn_input: str
```

- *Type:* str

---

##### `release_version_input`<sup>Optional</sup> <a name="release_version_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.releaseVersionInput"></a>

```python
release_version_input: str
```

- *Type:* str

---

##### `remote_access_input`<sup>Optional</sup> <a name="remote_access_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.remoteAccessInput"></a>

```python
remote_access_input: EksNodeGroupRemoteAccess
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

---

##### `scaling_config_input`<sup>Optional</sup> <a name="scaling_config_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.scalingConfigInput"></a>

```python
scaling_config_input: EksNodeGroupScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `taint_input`<sup>Optional</sup> <a name="taint_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.taintInput"></a>

```python
taint_input: typing.Union[IResolvable, typing.List[EksNodeGroupTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EksNodeGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>, cdktf.IResolvable]

---

##### `update_config_input`<sup>Optional</sup> <a name="update_config_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.updateConfigInput"></a>

```python
update_config_input: EksNodeGroupUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `ami_type`<sup>Required</sup> <a name="ami_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.amiType"></a>

```python
ami_type: str
```

- *Type:* str

---

##### `capacity_type`<sup>Required</sup> <a name="capacity_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `disk_size`<sup>Required</sup> <a name="disk_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.diskSize"></a>

```python
disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_update_version`<sup>Required</sup> <a name="force_update_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.forceUpdateVersion"></a>

```python
force_update_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_types`<sup>Required</sup> <a name="instance_types" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_group_name`<sup>Required</sup> <a name="node_group_name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupName"></a>

```python
node_group_name: str
```

- *Type:* str

---

##### `node_group_name_prefix`<sup>Required</sup> <a name="node_group_name_prefix" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefix"></a>

```python
node_group_name_prefix: str
```

- *Type:* str

---

##### `node_role_arn`<sup>Required</sup> <a name="node_role_arn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.nodeRoleArn"></a>

```python
node_role_arn: str
```

- *Type:* str

---

##### `release_version`<sup>Required</sup> <a name="release_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.releaseVersion"></a>

```python
release_version: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksNodeGroupConfig <a name="EksNodeGroupConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  node_role_arn: str,
  scaling_config: EksNodeGroupScalingConfig,
  subnet_ids: typing.List[str],
  ami_type: str = None,
  capacity_type: str = None,
  disk_size: typing.Union[int, float] = None,
  force_update_version: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_types: typing.List[str] = None,
  labels: typing.Mapping[str] = None,
  launch_template: EksNodeGroupLaunchTemplate = None,
  node_group_name: str = None,
  node_group_name_prefix: str = None,
  release_version: str = None,
  remote_access: EksNodeGroupRemoteAccess = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  taint: typing.Union[IResolvable, typing.List[EksNodeGroupTaint]] = None,
  timeouts: EksNodeGroupTimeouts = None,
  update_config: EksNodeGroupUpdateConfig = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#cluster_name EksNodeGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeRoleArn">node_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.amiType">ami_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ami_type EksNodeGroup#ami_type}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.capacityType">capacity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#capacity_type EksNodeGroup#capacity_type}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#disk_size EksNodeGroup#disk_size}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.forceUpdateVersion">force_update_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#force_update_version EksNodeGroup#force_update_version}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#instance_types EksNodeGroup#instance_types}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#labels EksNodeGroup#labels}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupName">node_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name EksNodeGroup#node_group_name}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupNamePrefix">node_group_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.releaseVersion">release_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#release_version EksNodeGroup#release_version}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.remoteAccess">remote_access</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | remote_access block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags EksNodeGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags_all EksNodeGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.taint">taint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]</code> | taint block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.updateConfig">update_config</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | update_config block. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#cluster_name EksNodeGroup#cluster_name}.

---

##### `node_role_arn`<sup>Required</sup> <a name="node_role_arn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeRoleArn"></a>

```python
node_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}.

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.scalingConfig"></a>

```python
scaling_config: EksNodeGroupScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#scaling_config EksNodeGroup#scaling_config}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}.

---

##### `ami_type`<sup>Optional</sup> <a name="ami_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.amiType"></a>

```python
ami_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ami_type EksNodeGroup#ami_type}.

---

##### `capacity_type`<sup>Optional</sup> <a name="capacity_type" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#capacity_type EksNodeGroup#capacity_type}.

---

##### `disk_size`<sup>Optional</sup> <a name="disk_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.diskSize"></a>

```python
disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#disk_size EksNodeGroup#disk_size}.

---

##### `force_update_version`<sup>Optional</sup> <a name="force_update_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.forceUpdateVersion"></a>

```python
force_update_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#force_update_version EksNodeGroup#force_update_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_types`<sup>Optional</sup> <a name="instance_types" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#instance_types EksNodeGroup#instance_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#labels EksNodeGroup#labels}.

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.launchTemplate"></a>

```python
launch_template: EksNodeGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#launch_template EksNodeGroup#launch_template}

---

##### `node_group_name`<sup>Optional</sup> <a name="node_group_name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupName"></a>

```python
node_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name EksNodeGroup#node_group_name}.

---

##### `node_group_name_prefix`<sup>Optional</sup> <a name="node_group_name_prefix" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupNamePrefix"></a>

```python
node_group_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}.

---

##### `release_version`<sup>Optional</sup> <a name="release_version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.releaseVersion"></a>

```python
release_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#release_version EksNodeGroup#release_version}.

---

##### `remote_access`<sup>Optional</sup> <a name="remote_access" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.remoteAccess"></a>

```python
remote_access: EksNodeGroupRemoteAccess
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

remote_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#remote_access EksNodeGroup#remote_access}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags EksNodeGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#tags_all EksNodeGroup#tags_all}.

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.taint"></a>

```python
taint: typing.Union[IResolvable, typing.List[EksNodeGroupTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]

taint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#taint EksNodeGroup#taint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.timeouts"></a>

```python
timeouts: EksNodeGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#timeouts EksNodeGroup#timeouts}

---

##### `update_config`<sup>Optional</sup> <a name="update_config" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.updateConfig"></a>

```python
update_config: EksNodeGroupUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#update_config EksNodeGroup#update_config}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}.

---

### EksNodeGroupLaunchTemplate <a name="EksNodeGroupLaunchTemplate" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupLaunchTemplate(
  version: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#name EksNodeGroup#name}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#version EksNodeGroup#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#id EksNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#name EksNodeGroup#name}.

---

### EksNodeGroupRemoteAccess <a name="EksNodeGroupRemoteAccess" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupRemoteAccess(
  ec2_ssh_key: str = None,
  source_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.property.ec2SshKey">ec2_ssh_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.property.sourceSecurityGroupIds">source_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}. |

---

##### `ec2_ssh_key`<sup>Optional</sup> <a name="ec2_ssh_key" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.property.ec2SshKey"></a>

```python
ec2_ssh_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}.

---

##### `source_security_group_ids`<sup>Optional</sup> <a name="source_security_group_ids" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess.property.sourceSecurityGroupIds"></a>

```python
source_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}.

---

### EksNodeGroupResources <a name="EksNodeGroupResources" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupResources()
```


### EksNodeGroupResourcesAutoscalingGroups <a name="EksNodeGroupResourcesAutoscalingGroups" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups()
```


### EksNodeGroupScalingConfig <a name="EksNodeGroupScalingConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupScalingConfig(
  desired_size: typing.Union[int, float],
  max_size: typing.Union[int, float],
  min_size: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.desiredSize">desired_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#desired_size EksNodeGroup#desired_size}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_size EksNodeGroup#max_size}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#min_size EksNodeGroup#min_size}. |

---

##### `desired_size`<sup>Required</sup> <a name="desired_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.desiredSize"></a>

```python
desired_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#desired_size EksNodeGroup#desired_size}.

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_size EksNodeGroup#max_size}.

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#min_size EksNodeGroup#min_size}.

---

### EksNodeGroupTaint <a name="EksNodeGroupTaint" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupTaint(
  effect: str,
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#effect EksNodeGroup#effect}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#key EksNodeGroup#key}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#value EksNodeGroup#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#effect EksNodeGroup#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#key EksNodeGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#value EksNodeGroup#value}.

---

### EksNodeGroupTimeouts <a name="EksNodeGroupTimeouts" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#create EksNodeGroup#create}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#delete EksNodeGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#update EksNodeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#create EksNodeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#delete EksNodeGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#update EksNodeGroup#update}.

---

### EksNodeGroupUpdateConfig <a name="EksNodeGroupUpdateConfig" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupUpdateConfig(
  max_unavailable: typing.Union[int, float] = None,
  max_unavailable_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailable">max_unavailable</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailablePercentage">max_unavailable_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}. |

---

##### `max_unavailable`<sup>Optional</sup> <a name="max_unavailable" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailable"></a>

```python
max_unavailable: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}.

---

##### `max_unavailable_percentage`<sup>Optional</sup> <a name="max_unavailable_percentage" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailablePercentage"></a>

```python
max_unavailable_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksNodeGroupLaunchTemplateOutputReference <a name="EksNodeGroupLaunchTemplateOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.internalValue"></a>

```python
internal_value: EksNodeGroupLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

---


### EksNodeGroupRemoteAccessOutputReference <a name="EksNodeGroupRemoteAccessOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupRemoteAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetEc2SshKey">reset_ec2_ssh_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetSourceSecurityGroupIds">reset_source_security_group_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ec2_ssh_key` <a name="reset_ec2_ssh_key" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetEc2SshKey"></a>

```python
def reset_ec2_ssh_key() -> None
```

##### `reset_source_security_group_ids` <a name="reset_source_security_group_ids" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetSourceSecurityGroupIds"></a>

```python
def reset_source_security_group_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKeyInput">ec2_ssh_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIdsInput">source_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKey">ec2_ssh_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIds">source_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ec2_ssh_key_input`<sup>Optional</sup> <a name="ec2_ssh_key_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKeyInput"></a>

```python
ec2_ssh_key_input: str
```

- *Type:* str

---

##### `source_security_group_ids_input`<sup>Optional</sup> <a name="source_security_group_ids_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIdsInput"></a>

```python
source_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ec2_ssh_key`<sup>Required</sup> <a name="ec2_ssh_key" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKey"></a>

```python
ec2_ssh_key: str
```

- *Type:* str

---

##### `source_security_group_ids`<sup>Required</sup> <a name="source_security_group_ids" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIds"></a>

```python
source_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.internalValue"></a>

```python
internal_value: EksNodeGroupRemoteAccess
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

---


### EksNodeGroupResourcesAutoscalingGroupsList <a name="EksNodeGroupResourcesAutoscalingGroupsList" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksNodeGroupResourcesAutoscalingGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EksNodeGroupResourcesAutoscalingGroupsOutputReference <a name="EksNodeGroupResourcesAutoscalingGroupsOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups">EksNodeGroupResourcesAutoscalingGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.internalValue"></a>

```python
internal_value: EksNodeGroupResourcesAutoscalingGroups
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups">EksNodeGroupResourcesAutoscalingGroups</a>

---


### EksNodeGroupResourcesList <a name="EksNodeGroupResourcesList" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksNodeGroupResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EksNodeGroupResourcesOutputReference <a name="EksNodeGroupResourcesOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.autoscalingGroups">autoscaling_groups</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList">EksNodeGroupResourcesAutoscalingGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.remoteAccessSecurityGroupId">remote_access_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResources">EksNodeGroupResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_groups`<sup>Required</sup> <a name="autoscaling_groups" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.autoscalingGroups"></a>

```python
autoscaling_groups: EksNodeGroupResourcesAutoscalingGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList">EksNodeGroupResourcesAutoscalingGroupsList</a>

---

##### `remote_access_security_group_id`<sup>Required</sup> <a name="remote_access_security_group_id" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.remoteAccessSecurityGroupId"></a>

```python
remote_access_security_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.internalValue"></a>

```python
internal_value: EksNodeGroupResources
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupResources">EksNodeGroupResources</a>

---


### EksNodeGroupScalingConfigOutputReference <a name="EksNodeGroupScalingConfigOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSizeInput">desired_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSize">desired_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_size_input`<sup>Optional</sup> <a name="desired_size_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSizeInput"></a>

```python
desired_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_size`<sup>Required</sup> <a name="desired_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSize"></a>

```python
desired_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: EksNodeGroupScalingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

---


### EksNodeGroupTaintList <a name="EksNodeGroupTaintList" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupTaintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksNodeGroupTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EksNodeGroupTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>]]

---


### EksNodeGroupTaintOutputReference <a name="EksNodeGroupTaintOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupTaintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaintOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EksNodeGroupTaint, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>, cdktf.IResolvable]

---


### EksNodeGroupTimeoutsOutputReference <a name="EksNodeGroupTimeoutsOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EksNodeGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>, cdktf.IResolvable]

---


### EksNodeGroupUpdateConfigOutputReference <a name="EksNodeGroupUpdateConfigOutputReference" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_node_group

eksNodeGroup.EksNodeGroupUpdateConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailable">reset_max_unavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailablePercentage">reset_max_unavailable_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_unavailable` <a name="reset_max_unavailable" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailable"></a>

```python
def reset_max_unavailable() -> None
```

##### `reset_max_unavailable_percentage` <a name="reset_max_unavailable_percentage" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailablePercentage"></a>

```python
def reset_max_unavailable_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailableInput">max_unavailable_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentageInput">max_unavailable_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailable">max_unavailable</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentage">max_unavailable_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_unavailable_input`<sup>Optional</sup> <a name="max_unavailable_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailableInput"></a>

```python
max_unavailable_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_percentage_input`<sup>Optional</sup> <a name="max_unavailable_percentage_input" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentageInput"></a>

```python
max_unavailable_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable`<sup>Required</sup> <a name="max_unavailable" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailable"></a>

```python
max_unavailable: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_percentage`<sup>Required</sup> <a name="max_unavailable_percentage" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentage"></a>

```python
max_unavailable_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.internalValue"></a>

```python
internal_value: EksNodeGroupUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-aws.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

---



