# `mqBroker` Submodule <a name="`mqBroker` Submodule" id="@cdktf/provider-aws.mqBroker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MqBroker <a name="MqBroker" id="@cdktf/provider-aws.mqBroker.MqBroker"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker aws_mq_broker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBroker(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  broker_name: str,
  engine_type: str,
  engine_version: str,
  host_instance_type: str,
  user: typing.Union[IResolvable, typing.List[MqBrokerUser]],
  apply_immediately: typing.Union[bool, IResolvable] = None,
  authentication_strategy: str = None,
  auto_minor_version_upgrade: typing.Union[bool, IResolvable] = None,
  configuration: MqBrokerConfiguration = None,
  deployment_mode: str = None,
  encryption_options: MqBrokerEncryptionOptions = None,
  id: str = None,
  ldap_server_metadata: MqBrokerLdapServerMetadata = None,
  logs: MqBrokerLogs = None,
  maintenance_window_start_time: MqBrokerMaintenanceWindowStartTime = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None,
  storage_type: str = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MqBrokerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.brokerName">broker_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineType">engine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.hostInstanceType">host_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.user">user</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]</code> | user block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.authenticationStrategy">authentication_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.deploymentMode">deployment_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.encryptionOptions">encryption_options</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | encryption_options block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.ldapServerMetadata">ldap_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | ldap_server_metadata block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.logs">logs</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.maintenanceWindowStartTime">maintenance_window_start_time</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | maintenance_window_start_time block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `broker_name`<sup>Required</sup> <a name="broker_name" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.brokerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}.

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}.

---

##### `host_instance_type`<sup>Required</sup> <a name="host_instance_type" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.hostInstanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.user"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user MqBroker#user}

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.applyImmediately"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}.

---

##### `authentication_strategy`<sup>Optional</sup> <a name="authentication_strategy" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.authenticationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#configuration MqBroker#configuration}

---

##### `deployment_mode`<sup>Optional</sup> <a name="deployment_mode" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.deploymentMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}.

---

##### `encryption_options`<sup>Optional</sup> <a name="encryption_options" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.encryptionOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

encryption_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#encryption_options MqBroker#encryption_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldap_server_metadata`<sup>Optional</sup> <a name="ldap_server_metadata" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.ldapServerMetadata"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

ldap_server_metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.logs"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#logs MqBroker#logs}

---

##### `maintenance_window_start_time`<sup>Optional</sup> <a name="maintenance_window_start_time" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.maintenanceWindowStartTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

maintenance_window_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.publiclyAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#timeouts MqBroker#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions">put_encryption_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata">put_ldap_server_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putLogs">put_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime">put_maintenance_window_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetApplyImmediately">reset_apply_immediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetAuthenticationStrategy">reset_authentication_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetDeploymentMode">reset_deployment_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetEncryptionOptions">reset_encryption_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetLdapServerMetadata">reset_ldap_server_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetLogs">reset_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetMaintenanceWindowStartTime">reset_maintenance_window_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBroker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.mqBroker.MqBroker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.mqBroker.MqBroker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.mqBroker.MqBroker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration"></a>

```python
def put_configuration(
  id: str = None,
  revision: typing.Union[int, float] = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration.parameter.revision"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#revision MqBroker#revision}.

---

##### `put_encryption_options` <a name="put_encryption_options" id="@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions"></a>

```python
def put_encryption_options(
  kms_key_id: str = None,
  use_aws_owned_key: typing.Union[bool, IResolvable] = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#kms_key_id MqBroker#kms_key_id}.

---

###### `use_aws_owned_key`<sup>Optional</sup> <a name="use_aws_owned_key" id="@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions.parameter.useAwsOwnedKey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}.

---

##### `put_ldap_server_metadata` <a name="put_ldap_server_metadata" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata"></a>

```python
def put_ldap_server_metadata(
  hosts: typing.List[str] = None,
  role_base: str = None,
  role_name: str = None,
  role_search_matching: str = None,
  role_search_subtree: typing.Union[bool, IResolvable] = None,
  service_account_password: str = None,
  service_account_username: str = None,
  user_base: str = None,
  user_role_name: str = None,
  user_search_matching: str = None,
  user_search_subtree: typing.Union[bool, IResolvable] = None
) -> None
```

###### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.hosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#hosts MqBroker#hosts}.

---

###### `role_base`<sup>Optional</sup> <a name="role_base" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.roleBase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_base MqBroker#role_base}.

---

###### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.roleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_name MqBroker#role_name}.

---

###### `role_search_matching`<sup>Optional</sup> <a name="role_search_matching" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.roleSearchMatching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_matching MqBroker#role_search_matching}.

---

###### `role_search_subtree`<sup>Optional</sup> <a name="role_search_subtree" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.roleSearchSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_subtree MqBroker#role_search_subtree}.

---

###### `service_account_password`<sup>Optional</sup> <a name="service_account_password" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.serviceAccountPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_password MqBroker#service_account_password}.

---

###### `service_account_username`<sup>Optional</sup> <a name="service_account_username" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.serviceAccountUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_username MqBroker#service_account_username}.

---

###### `user_base`<sup>Optional</sup> <a name="user_base" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.userBase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_base MqBroker#user_base}.

---

###### `user_role_name`<sup>Optional</sup> <a name="user_role_name" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.userRoleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_role_name MqBroker#user_role_name}.

---

###### `user_search_matching`<sup>Optional</sup> <a name="user_search_matching" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.userSearchMatching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_matching MqBroker#user_search_matching}.

---

###### `user_search_subtree`<sup>Optional</sup> <a name="user_search_subtree" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.userSearchSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_subtree MqBroker#user_search_subtree}.

---

##### `put_logs` <a name="put_logs" id="@cdktf/provider-aws.mqBroker.MqBroker.putLogs"></a>

```python
def put_logs(
  audit: str = None,
  general: typing.Union[bool, IResolvable] = None
) -> None
```

###### `audit`<sup>Optional</sup> <a name="audit" id="@cdktf/provider-aws.mqBroker.MqBroker.putLogs.parameter.audit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#audit MqBroker#audit}.

---

###### `general`<sup>Optional</sup> <a name="general" id="@cdktf/provider-aws.mqBroker.MqBroker.putLogs.parameter.general"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#general MqBroker#general}.

---

##### `put_maintenance_window_start_time` <a name="put_maintenance_window_start_time" id="@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime"></a>

```python
def put_maintenance_window_start_time(
  day_of_week: str,
  time_of_day: str,
  time_zone: str
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#day_of_week MqBroker#day_of_week}.

---

###### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime.parameter.timeOfDay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_of_day MqBroker#time_of_day}.

---

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_zone MqBroker#time_zone}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#create MqBroker#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#delete MqBroker#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#update MqBroker#update}.

---

##### `put_user` <a name="put_user" id="@cdktf/provider-aws.mqBroker.MqBroker.putUser"></a>

```python
def put_user(
  value: typing.Union[IResolvable, typing.List[MqBrokerUser]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.putUser.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]

---

##### `reset_apply_immediately` <a name="reset_apply_immediately" id="@cdktf/provider-aws.mqBroker.MqBroker.resetApplyImmediately"></a>

```python
def reset_apply_immediately() -> None
```

##### `reset_authentication_strategy` <a name="reset_authentication_strategy" id="@cdktf/provider-aws.mqBroker.MqBroker.resetAuthenticationStrategy"></a>

```python
def reset_authentication_strategy() -> None
```

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktf/provider-aws.mqBroker.MqBroker.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.mqBroker.MqBroker.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_deployment_mode` <a name="reset_deployment_mode" id="@cdktf/provider-aws.mqBroker.MqBroker.resetDeploymentMode"></a>

```python
def reset_deployment_mode() -> None
```

##### `reset_encryption_options` <a name="reset_encryption_options" id="@cdktf/provider-aws.mqBroker.MqBroker.resetEncryptionOptions"></a>

```python
def reset_encryption_options() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.mqBroker.MqBroker.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ldap_server_metadata` <a name="reset_ldap_server_metadata" id="@cdktf/provider-aws.mqBroker.MqBroker.resetLdapServerMetadata"></a>

```python
def reset_ldap_server_metadata() -> None
```

##### `reset_logs` <a name="reset_logs" id="@cdktf/provider-aws.mqBroker.MqBroker.resetLogs"></a>

```python
def reset_logs() -> None
```

##### `reset_maintenance_window_start_time` <a name="reset_maintenance_window_start_time" id="@cdktf/provider-aws.mqBroker.MqBroker.resetMaintenanceWindowStartTime"></a>

```python
def reset_maintenance_window_start_time() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktf/provider-aws.mqBroker.MqBroker.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.mqBroker.MqBroker.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-aws.mqBroker.MqBroker.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.mqBroker.MqBroker.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.mqBroker.MqBroker.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBroker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mqBroker.MqBroker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBroker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBroker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptions">encryption_options</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadata">ldap_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTime">maintenance_window_start_time</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference">MqBrokerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.user">user</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList">MqBrokerUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediatelyInput">apply_immediately_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategyInput">authentication_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.brokerNameInput">broker_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentModeInput">deployment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptionsInput">encryption_options_input</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineTypeInput">engine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceTypeInput">host_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadataInput">ldap_server_metadata_input</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.logsInput">logs_input</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput">maintenance_window_start_time_input</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.userInput">user_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategy">authentication_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.brokerName">broker_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentMode">deployment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceType">host_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mqBroker.MqBroker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.mqBroker.MqBroker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBroker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.mqBroker.MqBroker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mqBroker.MqBroker.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mqBroker.MqBroker.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mqBroker.MqBroker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mqBroker.MqBroker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mqBroker.MqBroker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mqBroker.MqBroker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mqBroker.MqBroker.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mqBroker.MqBroker.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.mqBroker.MqBroker.property.configuration"></a>

```python
configuration: MqBrokerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a>

---

##### `encryption_options`<sup>Required</sup> <a name="encryption_options" id="@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptions"></a>

```python
encryption_options: MqBrokerEncryptionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-aws.mqBroker.MqBroker.property.instances"></a>

```python
instances: MqBrokerInstancesList
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a>

---

##### `ldap_server_metadata`<sup>Required</sup> <a name="ldap_server_metadata" id="@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadata"></a>

```python
ldap_server_metadata: MqBrokerLdapServerMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-aws.mqBroker.MqBroker.property.logs"></a>

```python
logs: MqBrokerLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a>

---

##### `maintenance_window_start_time`<sup>Required</sup> <a name="maintenance_window_start_time" id="@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTime"></a>

```python
maintenance_window_start_time: MqBrokerMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.property.timeouts"></a>

```python
timeouts: MqBrokerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference">MqBrokerTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.mqBroker.MqBroker.property.user"></a>

```python
user: MqBrokerUserList
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList">MqBrokerUserList</a>

---

##### `apply_immediately_input`<sup>Optional</sup> <a name="apply_immediately_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediatelyInput"></a>

```python
apply_immediately_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_strategy_input`<sup>Optional</sup> <a name="authentication_strategy_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategyInput"></a>

```python
authentication_strategy_input: str
```

- *Type:* str

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `broker_name_input`<sup>Optional</sup> <a name="broker_name_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.brokerNameInput"></a>

```python
broker_name_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.configurationInput"></a>

```python
configuration_input: MqBrokerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `deployment_mode_input`<sup>Optional</sup> <a name="deployment_mode_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentModeInput"></a>

```python
deployment_mode_input: str
```

- *Type:* str

---

##### `encryption_options_input`<sup>Optional</sup> <a name="encryption_options_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptionsInput"></a>

```python
encryption_options_input: MqBrokerEncryptionOptions
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `engine_type_input`<sup>Optional</sup> <a name="engine_type_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineTypeInput"></a>

```python
engine_type_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `host_instance_type_input`<sup>Optional</sup> <a name="host_instance_type_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceTypeInput"></a>

```python
host_instance_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ldap_server_metadata_input`<sup>Optional</sup> <a name="ldap_server_metadata_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadataInput"></a>

```python
ldap_server_metadata_input: MqBrokerLdapServerMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `logs_input`<sup>Optional</sup> <a name="logs_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.logsInput"></a>

```python
logs_input: MqBrokerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `maintenance_window_start_time_input`<sup>Optional</sup> <a name="maintenance_window_start_time_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput"></a>

```python
maintenance_window_start_time_input: MqBrokerMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MqBrokerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>, cdktf.IResolvable]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-aws.mqBroker.MqBroker.property.userInput"></a>

```python
user_input: typing.Union[IResolvable, typing.List[MqBrokerUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]

---

##### `apply_immediately`<sup>Required</sup> <a name="apply_immediately" id="@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_strategy`<sup>Required</sup> <a name="authentication_strategy" id="@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategy"></a>

```python
authentication_strategy: str
```

- *Type:* str

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `broker_name`<sup>Required</sup> <a name="broker_name" id="@cdktf/provider-aws.mqBroker.MqBroker.property.brokerName"></a>

```python
broker_name: str
```

- *Type:* str

---

##### `deployment_mode`<sup>Required</sup> <a name="deployment_mode" id="@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentMode"></a>

```python
deployment_mode: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `host_instance_type`<sup>Required</sup> <a name="host_instance_type" id="@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceType"></a>

```python
host_instance_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBroker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-aws.mqBroker.MqBroker.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MqBrokerConfig <a name="MqBrokerConfig" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  broker_name: str,
  engine_type: str,
  engine_version: str,
  host_instance_type: str,
  user: typing.Union[IResolvable, typing.List[MqBrokerUser]],
  apply_immediately: typing.Union[bool, IResolvable] = None,
  authentication_strategy: str = None,
  auto_minor_version_upgrade: typing.Union[bool, IResolvable] = None,
  configuration: MqBrokerConfiguration = None,
  deployment_mode: str = None,
  encryption_options: MqBrokerEncryptionOptions = None,
  id: str = None,
  ldap_server_metadata: MqBrokerLdapServerMetadata = None,
  logs: MqBrokerLogs = None,
  maintenance_window_start_time: MqBrokerMaintenanceWindowStartTime = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None,
  storage_type: str = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MqBrokerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.brokerName">broker_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineType">engine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.hostInstanceType">host_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.user">user</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]</code> | user block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.authenticationStrategy">authentication_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.deploymentMode">deployment_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.encryptionOptions">encryption_options</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | encryption_options block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.ldapServerMetadata">ldap_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | ldap_server_metadata block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime">maintenance_window_start_time</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | maintenance_window_start_time block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `broker_name`<sup>Required</sup> <a name="broker_name" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.brokerName"></a>

```python
broker_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}.

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}.

---

##### `host_instance_type`<sup>Required</sup> <a name="host_instance_type" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.hostInstanceType"></a>

```python
host_instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.user"></a>

```python
user: typing.Union[IResolvable, typing.List[MqBrokerUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user MqBroker#user}

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}.

---

##### `authentication_strategy`<sup>Optional</sup> <a name="authentication_strategy" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.authenticationStrategy"></a>

```python
authentication_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.configuration"></a>

```python
configuration: MqBrokerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#configuration MqBroker#configuration}

---

##### `deployment_mode`<sup>Optional</sup> <a name="deployment_mode" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.deploymentMode"></a>

```python
deployment_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}.

---

##### `encryption_options`<sup>Optional</sup> <a name="encryption_options" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.encryptionOptions"></a>

```python
encryption_options: MqBrokerEncryptionOptions
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

encryption_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#encryption_options MqBroker#encryption_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldap_server_metadata`<sup>Optional</sup> <a name="ldap_server_metadata" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.ldapServerMetadata"></a>

```python
ldap_server_metadata: MqBrokerLdapServerMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

ldap_server_metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.logs"></a>

```python
logs: MqBrokerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#logs MqBroker#logs}

---

##### `maintenance_window_start_time`<sup>Optional</sup> <a name="maintenance_window_start_time" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime"></a>

```python
maintenance_window_start_time: MqBrokerMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

maintenance_window_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.timeouts"></a>

```python
timeouts: MqBrokerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#timeouts MqBroker#timeouts}

---

### MqBrokerConfiguration <a name="MqBrokerConfiguration" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerConfiguration(
  id: str = None,
  revision: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#revision MqBroker#revision}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#revision MqBroker#revision}.

---

### MqBrokerEncryptionOptions <a name="MqBrokerEncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerEncryptionOptions(
  kms_key_id: str = None,
  use_aws_owned_key: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#kms_key_id MqBroker#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey">use_aws_owned_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#kms_key_id MqBroker#kms_key_id}.

---

##### `use_aws_owned_key`<sup>Optional</sup> <a name="use_aws_owned_key" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey"></a>

```python
use_aws_owned_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}.

---

### MqBrokerInstances <a name="MqBrokerInstances" id="@cdktf/provider-aws.mqBroker.MqBrokerInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerInstances.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerInstances()
```


### MqBrokerLdapServerMetadata <a name="MqBrokerLdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerLdapServerMetadata(
  hosts: typing.List[str] = None,
  role_base: str = None,
  role_name: str = None,
  role_search_matching: str = None,
  role_search_subtree: typing.Union[bool, IResolvable] = None,
  service_account_password: str = None,
  service_account_username: str = None,
  user_base: str = None,
  user_role_name: str = None,
  user_search_matching: str = None,
  user_search_subtree: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#hosts MqBroker#hosts}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleBase">role_base</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_base MqBroker#role_base}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_name MqBroker#role_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching">role_search_matching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_matching MqBroker#role_search_matching}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree">role_search_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_subtree MqBroker#role_search_subtree}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword">service_account_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_password MqBroker#service_account_password}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername">service_account_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_username MqBroker#service_account_username}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userBase">user_base</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_base MqBroker#user_base}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName">user_role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_role_name MqBroker#user_role_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching">user_search_matching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_matching MqBroker#user_search_matching}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree">user_search_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_subtree MqBroker#user_search_subtree}. |

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#hosts MqBroker#hosts}.

---

##### `role_base`<sup>Optional</sup> <a name="role_base" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleBase"></a>

```python
role_base: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_base MqBroker#role_base}.

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_name MqBroker#role_name}.

---

##### `role_search_matching`<sup>Optional</sup> <a name="role_search_matching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching"></a>

```python
role_search_matching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_matching MqBroker#role_search_matching}.

---

##### `role_search_subtree`<sup>Optional</sup> <a name="role_search_subtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree"></a>

```python
role_search_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_subtree MqBroker#role_search_subtree}.

---

##### `service_account_password`<sup>Optional</sup> <a name="service_account_password" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword"></a>

```python
service_account_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_password MqBroker#service_account_password}.

---

##### `service_account_username`<sup>Optional</sup> <a name="service_account_username" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername"></a>

```python
service_account_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_username MqBroker#service_account_username}.

---

##### `user_base`<sup>Optional</sup> <a name="user_base" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userBase"></a>

```python
user_base: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_base MqBroker#user_base}.

---

##### `user_role_name`<sup>Optional</sup> <a name="user_role_name" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName"></a>

```python
user_role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_role_name MqBroker#user_role_name}.

---

##### `user_search_matching`<sup>Optional</sup> <a name="user_search_matching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching"></a>

```python
user_search_matching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_matching MqBroker#user_search_matching}.

---

##### `user_search_subtree`<sup>Optional</sup> <a name="user_search_subtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree"></a>

```python
user_search_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_subtree MqBroker#user_search_subtree}.

---

### MqBrokerLogs <a name="MqBrokerLogs" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerLogs(
  audit: str = None,
  general: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.audit">audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#audit MqBroker#audit}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.general">general</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#general MqBroker#general}. |

---

##### `audit`<sup>Optional</sup> <a name="audit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.audit"></a>

```python
audit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#audit MqBroker#audit}.

---

##### `general`<sup>Optional</sup> <a name="general" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.general"></a>

```python
general: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#general MqBroker#general}.

---

### MqBrokerMaintenanceWindowStartTime <a name="MqBrokerMaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerMaintenanceWindowStartTime(
  day_of_week: str,
  time_of_day: str,
  time_zone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#day_of_week MqBroker#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay">time_of_day</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_of_day MqBroker#time_of_day}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_zone MqBroker#time_zone}. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#day_of_week MqBroker#day_of_week}.

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_of_day MqBroker#time_of_day}.

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_zone MqBroker#time_zone}.

---

### MqBrokerTimeouts <a name="MqBrokerTimeouts" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#create MqBroker#create}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#delete MqBroker#delete}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#update MqBroker#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#create MqBroker#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#delete MqBroker#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#update MqBroker#update}.

---

### MqBrokerUser <a name="MqBrokerUser" id="@cdktf/provider-aws.mqBroker.MqBrokerUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerUser(
  password: str,
  username: str,
  console_access: typing.Union[bool, IResolvable] = None,
  groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#password MqBroker#password}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#username MqBroker#username}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.consoleAccess">console_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#console_access MqBroker#console_access}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.groups">groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#groups MqBroker#groups}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#password MqBroker#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#username MqBroker#username}.

---

##### `console_access`<sup>Optional</sup> <a name="console_access" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.consoleAccess"></a>

```python
console_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#console_access MqBroker#console_access}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#groups MqBroker#groups}.

---

## Classes <a name="Classes" id="Classes"></a>

### MqBrokerConfigurationOutputReference <a name="MqBrokerConfigurationOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetRevision">reset_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput">revision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput"></a>

```python
revision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: MqBrokerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---


### MqBrokerEncryptionOptionsOutputReference <a name="MqBrokerEncryptionOptionsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerEncryptionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey">reset_use_aws_owned_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_use_aws_owned_key` <a name="reset_use_aws_owned_key" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey"></a>

```python
def reset_use_aws_owned_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput">use_aws_owned_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey">use_aws_owned_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `use_aws_owned_key_input`<sup>Optional</sup> <a name="use_aws_owned_key_input" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput"></a>

```python
use_aws_owned_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `use_aws_owned_key`<sup>Required</sup> <a name="use_aws_owned_key" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey"></a>

```python
use_aws_owned_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: MqBrokerEncryptionOptions
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---


### MqBrokerInstancesList <a name="MqBrokerInstancesList" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MqBrokerInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MqBrokerInstancesOutputReference <a name="MqBrokerInstancesOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl">console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.endpoints">endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstances">MqBrokerInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `console_url`<sup>Required</sup> <a name="console_url" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl"></a>

```python
console_url: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.endpoints"></a>

```python
endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.internalValue"></a>

```python
internal_value: MqBrokerInstances
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstances">MqBrokerInstances</a>

---


### MqBrokerLdapServerMetadataOutputReference <a name="MqBrokerLdapServerMetadataOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerLdapServerMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase">reset_role_base</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching">reset_role_search_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree">reset_role_search_subtree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword">reset_service_account_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername">reset_service_account_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase">reset_user_base</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName">reset_user_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching">reset_user_search_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree">reset_user_search_subtree</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hosts` <a name="reset_hosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_role_base` <a name="reset_role_base" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase"></a>

```python
def reset_role_base() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_role_search_matching` <a name="reset_role_search_matching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching"></a>

```python
def reset_role_search_matching() -> None
```

##### `reset_role_search_subtree` <a name="reset_role_search_subtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree"></a>

```python
def reset_role_search_subtree() -> None
```

##### `reset_service_account_password` <a name="reset_service_account_password" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword"></a>

```python
def reset_service_account_password() -> None
```

##### `reset_service_account_username` <a name="reset_service_account_username" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername"></a>

```python
def reset_service_account_username() -> None
```

##### `reset_user_base` <a name="reset_user_base" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase"></a>

```python
def reset_user_base() -> None
```

##### `reset_user_role_name` <a name="reset_user_role_name" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName"></a>

```python
def reset_user_role_name() -> None
```

##### `reset_user_search_matching` <a name="reset_user_search_matching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching"></a>

```python
def reset_user_search_matching() -> None
```

##### `reset_user_search_subtree` <a name="reset_user_search_subtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree"></a>

```python
def reset_user_search_subtree() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput">role_base_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput">role_search_matching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput">role_search_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput">service_account_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput">service_account_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput">user_base_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput">user_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput">user_search_matching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput">user_search_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase">role_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching">role_search_matching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree">role_search_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword">service_account_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername">service_account_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase">user_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName">user_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching">user_search_matching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree">user_search_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_base_input`<sup>Optional</sup> <a name="role_base_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput"></a>

```python
role_base_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `role_search_matching_input`<sup>Optional</sup> <a name="role_search_matching_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput"></a>

```python
role_search_matching_input: str
```

- *Type:* str

---

##### `role_search_subtree_input`<sup>Optional</sup> <a name="role_search_subtree_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput"></a>

```python
role_search_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_account_password_input`<sup>Optional</sup> <a name="service_account_password_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput"></a>

```python
service_account_password_input: str
```

- *Type:* str

---

##### `service_account_username_input`<sup>Optional</sup> <a name="service_account_username_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput"></a>

```python
service_account_username_input: str
```

- *Type:* str

---

##### `user_base_input`<sup>Optional</sup> <a name="user_base_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput"></a>

```python
user_base_input: str
```

- *Type:* str

---

##### `user_role_name_input`<sup>Optional</sup> <a name="user_role_name_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput"></a>

```python
user_role_name_input: str
```

- *Type:* str

---

##### `user_search_matching_input`<sup>Optional</sup> <a name="user_search_matching_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput"></a>

```python
user_search_matching_input: str
```

- *Type:* str

---

##### `user_search_subtree_input`<sup>Optional</sup> <a name="user_search_subtree_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput"></a>

```python
user_search_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_base`<sup>Required</sup> <a name="role_base" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase"></a>

```python
role_base: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `role_search_matching`<sup>Required</sup> <a name="role_search_matching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching"></a>

```python
role_search_matching: str
```

- *Type:* str

---

##### `role_search_subtree`<sup>Required</sup> <a name="role_search_subtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree"></a>

```python
role_search_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_account_password`<sup>Required</sup> <a name="service_account_password" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword"></a>

```python
service_account_password: str
```

- *Type:* str

---

##### `service_account_username`<sup>Required</sup> <a name="service_account_username" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername"></a>

```python
service_account_username: str
```

- *Type:* str

---

##### `user_base`<sup>Required</sup> <a name="user_base" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase"></a>

```python
user_base: str
```

- *Type:* str

---

##### `user_role_name`<sup>Required</sup> <a name="user_role_name" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName"></a>

```python
user_role_name: str
```

- *Type:* str

---

##### `user_search_matching`<sup>Required</sup> <a name="user_search_matching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching"></a>

```python
user_search_matching: str
```

- *Type:* str

---

##### `user_search_subtree`<sup>Required</sup> <a name="user_search_subtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree"></a>

```python
user_search_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue"></a>

```python
internal_value: MqBrokerLdapServerMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---


### MqBrokerLogsOutputReference <a name="MqBrokerLogsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetAudit">reset_audit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetGeneral">reset_general</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audit` <a name="reset_audit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetAudit"></a>

```python
def reset_audit() -> None
```

##### `reset_general` <a name="reset_general" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetGeneral"></a>

```python
def reset_general() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.auditInput">audit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.generalInput">general_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.audit">audit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.general">general</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_input`<sup>Optional</sup> <a name="audit_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.auditInput"></a>

```python
audit_input: str
```

- *Type:* str

---

##### `general_input`<sup>Optional</sup> <a name="general_input" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.generalInput"></a>

```python
general_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audit`<sup>Required</sup> <a name="audit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.audit"></a>

```python
audit: str
```

- *Type:* str

---

##### `general`<sup>Required</sup> <a name="general" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.general"></a>

```python
general: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.internalValue"></a>

```python
internal_value: MqBrokerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---


### MqBrokerMaintenanceWindowStartTimeOutputReference <a name="MqBrokerMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput">time_of_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay">time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `time_of_day_input`<sup>Optional</sup> <a name="time_of_day_input" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput"></a>

```python
time_of_day_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: MqBrokerMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---


### MqBrokerTimeoutsOutputReference <a name="MqBrokerTimeoutsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MqBrokerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>, cdktf.IResolvable]

---


### MqBrokerUserList <a name="MqBrokerUserList" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MqBrokerUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MqBrokerUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>]]

---


### MqBrokerUserOutputReference <a name="MqBrokerUserOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mq_broker

mqBroker.MqBrokerUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess">reset_console_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetGroups">reset_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_console_access` <a name="reset_console_access" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess"></a>

```python
def reset_console_access() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput">console_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccess">console_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `console_access_input`<sup>Optional</sup> <a name="console_access_input" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput"></a>

```python
console_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `console_access`<sup>Required</sup> <a name="console_access" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccess"></a>

```python
console_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MqBrokerUser, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>, cdktf.IResolvable]

---



