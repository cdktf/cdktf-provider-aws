# `daxCluster` Submodule <a name="`daxCluster` Submodule" id="@cdktf/provider-aws.daxCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DaxCluster <a name="DaxCluster" id="@cdktf/provider-aws.daxCluster.DaxCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster aws_dax_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxCluster(
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
  iam_role_arn: str,
  node_type: str,
  replication_factor: typing.Union[int, float],
  availability_zones: typing.List[str] = None,
  cluster_endpoint_encryption_type: str = None,
  description: str = None,
  id: str = None,
  maintenance_window: str = None,
  notification_topic_arn: str = None,
  parameter_group_name: str = None,
  security_group_ids: typing.List[str] = None,
  server_side_encryption: DaxClusterServerSideEncryption = None,
  subnet_group_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DaxClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#cluster_name DaxCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#node_type DaxCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#replication_factor DaxCluster#replication_factor}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#availability_zones DaxCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.clusterEndpointEncryptionType">cluster_endpoint_encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#description DaxCluster#description}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#id DaxCluster#id}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#maintenance_window DaxCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#security_group_ids DaxCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption">DaxClusterServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#tags DaxCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#tags_all DaxCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts">DaxClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#cluster_name DaxCluster#cluster_name}.

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#node_type DaxCluster#node_type}.

---

##### `replication_factor`<sup>Required</sup> <a name="replication_factor" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.replicationFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#replication_factor DaxCluster#replication_factor}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#availability_zones DaxCluster#availability_zones}.

---

##### `cluster_endpoint_encryption_type`<sup>Optional</sup> <a name="cluster_endpoint_encryption_type" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.clusterEndpointEncryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#description DaxCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#id DaxCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#maintenance_window DaxCluster#maintenance_window}.

---

##### `notification_topic_arn`<sup>Optional</sup> <a name="notification_topic_arn" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.notificationTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}.

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.parameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#security_group_ids DaxCluster#security_group_ids}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.serverSideEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption">DaxClusterServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#server_side_encryption DaxCluster#server_side_encryption}

---

##### `subnet_group_name`<sup>Optional</sup> <a name="subnet_group_name" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.subnetGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#tags DaxCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#tags_all DaxCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.daxCluster.DaxCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts">DaxClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#timeouts DaxCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.putServerSideEncryption">put_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetClusterEndpointEncryptionType">reset_cluster_endpoint_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetNotificationTopicArn">reset_notification_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetParameterGroupName">reset_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetServerSideEncryption">reset_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetSubnetGroupName">reset_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.daxCluster.DaxCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.daxCluster.DaxCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.daxCluster.DaxCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.daxCluster.DaxCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.daxCluster.DaxCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.daxCluster.DaxCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.daxCluster.DaxCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.daxCluster.DaxCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_server_side_encryption` <a name="put_server_side_encryption" id="@cdktf/provider-aws.daxCluster.DaxCluster.putServerSideEncryption"></a>

```python
def put_server_side_encryption(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.daxCluster.DaxCluster.putServerSideEncryption.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#enabled DaxCluster#enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.daxCluster.DaxCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.daxCluster.DaxCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#create DaxCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.daxCluster.DaxCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#delete DaxCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.daxCluster.DaxCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#update DaxCluster#update}.

---

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_cluster_endpoint_encryption_type` <a name="reset_cluster_endpoint_encryption_type" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetClusterEndpointEncryptionType"></a>

```python
def reset_cluster_endpoint_encryption_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_notification_topic_arn` <a name="reset_notification_topic_arn" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetNotificationTopicArn"></a>

```python
def reset_notification_topic_arn() -> None
```

##### `reset_parameter_group_name` <a name="reset_parameter_group_name" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetParameterGroupName"></a>

```python
def reset_parameter_group_name() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_server_side_encryption` <a name="reset_server_side_encryption" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetServerSideEncryption"></a>

```python
def reset_server_side_encryption() -> None
```

##### `reset_subnet_group_name` <a name="reset_subnet_group_name" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetSubnetGroupName"></a>

```python
def reset_subnet_group_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.daxCluster.DaxCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.daxCluster.DaxCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.daxCluster.DaxCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.daxCluster.DaxCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.daxCluster.DaxCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.daxCluster.DaxCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.daxCluster.DaxCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterAddress">cluster_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.configurationEndpoint">configuration_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList">DaxClusterNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference">DaxClusterServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference">DaxClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterEndpointEncryptionTypeInput">cluster_endpoint_encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.notificationTopicArnInput">notification_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.parameterGroupNameInput">parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.replicationFactorInput">replication_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.serverSideEncryptionInput">server_side_encryption_input</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption">DaxClusterServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.subnetGroupNameInput">subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts">DaxClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterEndpointEncryptionType">cluster_endpoint_encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cluster_address`<sup>Required</sup> <a name="cluster_address" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterAddress"></a>

```python
cluster_address: str
```

- *Type:* str

---

##### `configuration_endpoint`<sup>Required</sup> <a name="configuration_endpoint" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.configurationEndpoint"></a>

```python
configuration_endpoint: str
```

- *Type:* str

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.nodes"></a>

```python
nodes: DaxClusterNodesList
```

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList">DaxClusterNodesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.serverSideEncryption"></a>

```python
server_side_encryption: DaxClusterServerSideEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference">DaxClusterServerSideEncryptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.timeouts"></a>

```python
timeouts: DaxClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference">DaxClusterTimeoutsOutputReference</a>

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_endpoint_encryption_type_input`<sup>Optional</sup> <a name="cluster_endpoint_encryption_type_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterEndpointEncryptionTypeInput"></a>

```python
cluster_endpoint_encryption_type_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `notification_topic_arn_input`<sup>Optional</sup> <a name="notification_topic_arn_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.notificationTopicArnInput"></a>

```python
notification_topic_arn_input: str
```

- *Type:* str

---

##### `parameter_group_name_input`<sup>Optional</sup> <a name="parameter_group_name_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.parameterGroupNameInput"></a>

```python
parameter_group_name_input: str
```

- *Type:* str

---

##### `replication_factor_input`<sup>Optional</sup> <a name="replication_factor_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.replicationFactorInput"></a>

```python
replication_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_side_encryption_input`<sup>Optional</sup> <a name="server_side_encryption_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.serverSideEncryptionInput"></a>

```python
server_side_encryption_input: DaxClusterServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption">DaxClusterServerSideEncryption</a>

---

##### `subnet_group_name_input`<sup>Optional</sup> <a name="subnet_group_name_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.subnetGroupNameInput"></a>

```python
subnet_group_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DaxClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts">DaxClusterTimeouts</a>, cdktf.IResolvable]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_endpoint_encryption_type`<sup>Required</sup> <a name="cluster_endpoint_encryption_type" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterEndpointEncryptionType"></a>

```python
cluster_endpoint_encryption_type: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `notification_topic_arn`<sup>Required</sup> <a name="notification_topic_arn" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.notificationTopicArn"></a>

```python
notification_topic_arn: str
```

- *Type:* str

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

##### `replication_factor`<sup>Required</sup> <a name="replication_factor" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_group_name`<sup>Required</sup> <a name="subnet_group_name" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.subnetGroupName"></a>

```python
subnet_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.daxCluster.DaxCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DaxClusterConfig <a name="DaxClusterConfig" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  iam_role_arn: str,
  node_type: str,
  replication_factor: typing.Union[int, float],
  availability_zones: typing.List[str] = None,
  cluster_endpoint_encryption_type: str = None,
  description: str = None,
  id: str = None,
  maintenance_window: str = None,
  notification_topic_arn: str = None,
  parameter_group_name: str = None,
  security_group_ids: typing.List[str] = None,
  server_side_encryption: DaxClusterServerSideEncryption = None,
  subnet_group_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DaxClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#cluster_name DaxCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#node_type DaxCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#replication_factor DaxCluster#replication_factor}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#availability_zones DaxCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.clusterEndpointEncryptionType">cluster_endpoint_encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#description DaxCluster#description}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#id DaxCluster#id}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#maintenance_window DaxCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#security_group_ids DaxCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption">DaxClusterServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.subnetGroupName">subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#tags DaxCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#tags_all DaxCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts">DaxClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#cluster_name DaxCluster#cluster_name}.

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#node_type DaxCluster#node_type}.

---

##### `replication_factor`<sup>Required</sup> <a name="replication_factor" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#replication_factor DaxCluster#replication_factor}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#availability_zones DaxCluster#availability_zones}.

---

##### `cluster_endpoint_encryption_type`<sup>Optional</sup> <a name="cluster_endpoint_encryption_type" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.clusterEndpointEncryptionType"></a>

```python
cluster_endpoint_encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#description DaxCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#id DaxCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#maintenance_window DaxCluster#maintenance_window}.

---

##### `notification_topic_arn`<sup>Optional</sup> <a name="notification_topic_arn" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.notificationTopicArn"></a>

```python
notification_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}.

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#security_group_ids DaxCluster#security_group_ids}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.serverSideEncryption"></a>

```python
server_side_encryption: DaxClusterServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption">DaxClusterServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#server_side_encryption DaxCluster#server_side_encryption}

---

##### `subnet_group_name`<sup>Optional</sup> <a name="subnet_group_name" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.subnetGroupName"></a>

```python
subnet_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#tags DaxCluster#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#tags_all DaxCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.daxCluster.DaxClusterConfig.property.timeouts"></a>

```python
timeouts: DaxClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts">DaxClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#timeouts DaxCluster#timeouts}

---

### DaxClusterNodes <a name="DaxClusterNodes" id="@cdktf/provider-aws.daxCluster.DaxClusterNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.daxCluster.DaxClusterNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxClusterNodes()
```


### DaxClusterServerSideEncryption <a name="DaxClusterServerSideEncryption" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxClusterServerSideEncryption(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#enabled DaxCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#enabled DaxCluster#enabled}.

---

### DaxClusterTimeouts <a name="DaxClusterTimeouts" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#create DaxCluster#create}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#delete DaxCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#update DaxCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#create DaxCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#delete DaxCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster#update DaxCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DaxClusterNodesList <a name="DaxClusterNodesList" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxClusterNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DaxClusterNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DaxClusterNodesOutputReference <a name="DaxClusterNodesOutputReference" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxClusterNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodes">DaxClusterNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.daxCluster.DaxClusterNodesOutputReference.property.internalValue"></a>

```python
internal_value: DaxClusterNodes
```

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterNodes">DaxClusterNodes</a>

---


### DaxClusterServerSideEncryptionOutputReference <a name="DaxClusterServerSideEncryptionOutputReference" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxClusterServerSideEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption">DaxClusterServerSideEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DaxClusterServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.daxCluster.DaxClusterServerSideEncryption">DaxClusterServerSideEncryption</a>

---


### DaxClusterTimeoutsOutputReference <a name="DaxClusterTimeoutsOutputReference" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dax_cluster

daxCluster.DaxClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts">DaxClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.daxCluster.DaxClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DaxClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.daxCluster.DaxClusterTimeouts">DaxClusterTimeouts</a>, cdktf.IResolvable]

---



