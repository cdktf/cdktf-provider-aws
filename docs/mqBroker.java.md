# `mqBroker` Submodule <a name="`mqBroker` Submodule" id="@cdktf/provider-aws.mqBroker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MqBroker <a name="MqBroker" id="@cdktf/provider-aws.mqBroker.MqBroker"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker aws_mq_broker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBroker;

MqBroker.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .brokerName(java.lang.String)
    .engineType(java.lang.String)
    .engineVersion(java.lang.String)
    .hostInstanceType(java.lang.String)
    .user(IResolvable)
    .user(java.util.List<MqBrokerUser>)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .authenticationStrategy(java.lang.String)
//  .autoMinorVersionUpgrade(java.lang.Boolean)
//  .autoMinorVersionUpgrade(IResolvable)
//  .configuration(MqBrokerConfiguration)
//  .deploymentMode(java.lang.String)
//  .encryptionOptions(MqBrokerEncryptionOptions)
//  .id(java.lang.String)
//  .ldapServerMetadata(MqBrokerLdapServerMetadata)
//  .logs(MqBrokerLogs)
//  .maintenanceWindowStartTime(MqBrokerMaintenanceWindowStartTime)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
//  .storageType(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MqBrokerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.brokerName">brokerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.hostInstanceType">hostInstanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.user">user</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>></code> | user block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.authenticationStrategy">authenticationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.encryptionOptions">encryptionOptions</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | encryption_options block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.ldapServerMetadata">ldapServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | ldap_server_metadata block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.logs">logs</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | maintenance_window_start_time block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.brokerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}.

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}.

---

##### `hostInstanceType`<sup>Required</sup> <a name="hostInstanceType" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.hostInstanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.user"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user MqBroker#user}

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}.

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.authenticationStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#configuration MqBroker#configuration}

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.deploymentMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}.

---

##### `encryptionOptions`<sup>Optional</sup> <a name="encryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.encryptionOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

encryption_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#encryption_options MqBroker#encryption_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="ldapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.ldapServerMetadata"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

ldap_server_metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.logs"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#logs MqBroker#logs}

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.maintenanceWindowStartTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

maintenance_window_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions">putEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata">putLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putLogs">putLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime">putMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetAuthenticationStrategy">resetAuthenticationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetDeploymentMode">resetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetEncryptionOptions">resetEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetLdapServerMetadata">resetLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetMaintenanceWindowStartTime">resetMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBroker.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.mqBroker.MqBroker.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.mqBroker.MqBroker.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration"></a>

```java
public void putConfiguration(MqBrokerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `putEncryptionOptions` <a name="putEncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions"></a>

```java
public void putEncryptionOptions(MqBrokerEncryptionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `putLdapServerMetadata` <a name="putLdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata"></a>

```java
public void putLdapServerMetadata(MqBrokerLdapServerMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `putLogs` <a name="putLogs" id="@cdktf/provider-aws.mqBroker.MqBroker.putLogs"></a>

```java
public void putLogs(MqBrokerLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `putMaintenanceWindowStartTime` <a name="putMaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime"></a>

```java
public void putMaintenanceWindowStartTime(MqBrokerMaintenanceWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts"></a>

```java
public void putTimeouts(MqBrokerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

---

##### `putUser` <a name="putUser" id="@cdktf/provider-aws.mqBroker.MqBroker.putUser"></a>

```java
public void putUser(IResolvable OR java.util.List<MqBrokerUser> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mqBroker.MqBroker.putUser.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.mqBroker.MqBroker.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAuthenticationStrategy` <a name="resetAuthenticationStrategy" id="@cdktf/provider-aws.mqBroker.MqBroker.resetAuthenticationStrategy"></a>

```java
public void resetAuthenticationStrategy()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.mqBroker.MqBroker.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.mqBroker.MqBroker.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDeploymentMode` <a name="resetDeploymentMode" id="@cdktf/provider-aws.mqBroker.MqBroker.resetDeploymentMode"></a>

```java
public void resetDeploymentMode()
```

##### `resetEncryptionOptions` <a name="resetEncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBroker.resetEncryptionOptions"></a>

```java
public void resetEncryptionOptions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mqBroker.MqBroker.resetId"></a>

```java
public void resetId()
```

##### `resetLdapServerMetadata` <a name="resetLdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.resetLdapServerMetadata"></a>

```java
public void resetLdapServerMetadata()
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-aws.mqBroker.MqBroker.resetLogs"></a>

```java
public void resetLogs()
```

##### `resetMaintenanceWindowStartTime` <a name="resetMaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBroker.resetMaintenanceWindowStartTime"></a>

```java
public void resetMaintenanceWindowStartTime()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktf/provider-aws.mqBroker.MqBroker.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.mqBroker.MqBroker.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.mqBroker.MqBroker.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.mqBroker.MqBroker.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.mqBroker.MqBroker.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBroker;

MqBroker.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBroker;

MqBroker.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBroker;

MqBroker.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptions">encryptionOptions</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadata">ldapServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference">MqBrokerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.user">user</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList">MqBrokerUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategyInput">authenticationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.brokerNameInput">brokerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentModeInput">deploymentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptionsInput">encryptionOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineTypeInput">engineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceTypeInput">hostInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadataInput">ldapServerMetadataInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.logsInput">logsInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput">maintenanceWindowStartTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.userInput">userInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategy">authenticationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.brokerName">brokerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineType">engineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceType">hostInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mqBroker.MqBroker.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.mqBroker.MqBroker.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBroker.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.mqBroker.MqBroker.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mqBroker.MqBroker.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mqBroker.MqBroker.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mqBroker.MqBroker.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mqBroker.MqBroker.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mqBroker.MqBroker.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mqBroker.MqBroker.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mqBroker.MqBroker.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mqBroker.MqBroker.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.mqBroker.MqBroker.property.configuration"></a>

```java
public MqBrokerConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a>

---

##### `encryptionOptions`<sup>Required</sup> <a name="encryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptions"></a>

```java
public MqBrokerEncryptionOptionsOutputReference getEncryptionOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-aws.mqBroker.MqBroker.property.instances"></a>

```java
public MqBrokerInstancesList getInstances();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a>

---

##### `ldapServerMetadata`<sup>Required</sup> <a name="ldapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadata"></a>

```java
public MqBrokerLdapServerMetadataOutputReference getLdapServerMetadata();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-aws.mqBroker.MqBroker.property.logs"></a>

```java
public MqBrokerLogsOutputReference getLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a>

---

##### `maintenanceWindowStartTime`<sup>Required</sup> <a name="maintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTime"></a>

```java
public MqBrokerMaintenanceWindowStartTimeOutputReference getMaintenanceWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.property.timeouts"></a>

```java
public MqBrokerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference">MqBrokerTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.mqBroker.MqBroker.property.user"></a>

```java
public MqBrokerUserList getUser();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList">MqBrokerUserList</a>

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediatelyInput"></a>

```java
public java.lang.Object getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authenticationStrategyInput`<sup>Optional</sup> <a name="authenticationStrategyInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategyInput"></a>

```java
public java.lang.String getAuthenticationStrategyInput();
```

- *Type:* java.lang.String

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Object getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `brokerNameInput`<sup>Optional</sup> <a name="brokerNameInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.brokerNameInput"></a>

```java
public java.lang.String getBrokerNameInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.configurationInput"></a>

```java
public MqBrokerConfiguration getConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `deploymentModeInput`<sup>Optional</sup> <a name="deploymentModeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentModeInput"></a>

```java
public java.lang.String getDeploymentModeInput();
```

- *Type:* java.lang.String

---

##### `encryptionOptionsInput`<sup>Optional</sup> <a name="encryptionOptionsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptionsInput"></a>

```java
public MqBrokerEncryptionOptions getEncryptionOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineTypeInput"></a>

```java
public java.lang.String getEngineTypeInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `hostInstanceTypeInput`<sup>Optional</sup> <a name="hostInstanceTypeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceTypeInput"></a>

```java
public java.lang.String getHostInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ldapServerMetadataInput`<sup>Optional</sup> <a name="ldapServerMetadataInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadataInput"></a>

```java
public MqBrokerLdapServerMetadata getLdapServerMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.logsInput"></a>

```java
public MqBrokerLogs getLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `maintenanceWindowStartTimeInput`<sup>Optional</sup> <a name="maintenanceWindowStartTimeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput"></a>

```java
public MqBrokerMaintenanceWindowStartTime getMaintenanceWindowStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessibleInput"></a>

```java
public java.lang.Object getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.userInput"></a>

```java
public java.lang.Object getUserInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authenticationStrategy`<sup>Required</sup> <a name="authenticationStrategy" id="@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategy"></a>

```java
public java.lang.String getAuthenticationStrategy();
```

- *Type:* java.lang.String

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Object getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdktf/provider-aws.mqBroker.MqBroker.property.brokerName"></a>

```java
public java.lang.String getBrokerName();
```

- *Type:* java.lang.String

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentMode"></a>

```java
public java.lang.String getDeploymentMode();
```

- *Type:* java.lang.String

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `hostInstanceType`<sup>Required</sup> <a name="hostInstanceType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceType"></a>

```java
public java.lang.String getHostInstanceType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBroker.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MqBrokerConfig <a name="MqBrokerConfig" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerConfig;

MqBrokerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .brokerName(java.lang.String)
    .engineType(java.lang.String)
    .engineVersion(java.lang.String)
    .hostInstanceType(java.lang.String)
    .user(IResolvable)
    .user(java.util.List<MqBrokerUser>)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .authenticationStrategy(java.lang.String)
//  .autoMinorVersionUpgrade(java.lang.Boolean)
//  .autoMinorVersionUpgrade(IResolvable)
//  .configuration(MqBrokerConfiguration)
//  .deploymentMode(java.lang.String)
//  .encryptionOptions(MqBrokerEncryptionOptions)
//  .id(java.lang.String)
//  .ldapServerMetadata(MqBrokerLdapServerMetadata)
//  .logs(MqBrokerLogs)
//  .maintenanceWindowStartTime(MqBrokerMaintenanceWindowStartTime)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
//  .storageType(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MqBrokerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.brokerName">brokerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.hostInstanceType">hostInstanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.user">user</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>></code> | user block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.authenticationStrategy">authenticationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.encryptionOptions">encryptionOptions</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | encryption_options block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.ldapServerMetadata">ldapServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | ldap_server_metadata block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime">maintenanceWindowStartTime</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | maintenance_window_start_time block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brokerName`<sup>Required</sup> <a name="brokerName" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.brokerName"></a>

```java
public java.lang.String getBrokerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}.

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}.

---

##### `hostInstanceType`<sup>Required</sup> <a name="hostInstanceType" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.hostInstanceType"></a>

```java
public java.lang.String getHostInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.user"></a>

```java
public java.lang.Object getUser();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user MqBroker#user}

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}.

---

##### `authenticationStrategy`<sup>Optional</sup> <a name="authenticationStrategy" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.authenticationStrategy"></a>

```java
public java.lang.String getAuthenticationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Object getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.configuration"></a>

```java
public MqBrokerConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#configuration MqBroker#configuration}

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.deploymentMode"></a>

```java
public java.lang.String getDeploymentMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}.

---

##### `encryptionOptions`<sup>Optional</sup> <a name="encryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.encryptionOptions"></a>

```java
public MqBrokerEncryptionOptions getEncryptionOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

encryption_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#encryption_options MqBroker#encryption_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldapServerMetadata`<sup>Optional</sup> <a name="ldapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.ldapServerMetadata"></a>

```java
public MqBrokerLdapServerMetadata getLdapServerMetadata();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

ldap_server_metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.logs"></a>

```java
public MqBrokerLogs getLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#logs MqBroker#logs}

---

##### `maintenanceWindowStartTime`<sup>Optional</sup> <a name="maintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime"></a>

```java
public MqBrokerMaintenanceWindowStartTime getMaintenanceWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

maintenance_window_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.timeouts"></a>

```java
public MqBrokerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#timeouts MqBroker#timeouts}

---

### MqBrokerConfiguration <a name="MqBrokerConfiguration" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerConfiguration;

MqBrokerConfiguration.builder()
//  .id(java.lang.String)
//  .revision(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.revision">revision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#revision MqBroker#revision}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#revision MqBroker#revision}.

---

### MqBrokerEncryptionOptions <a name="MqBrokerEncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerEncryptionOptions;

MqBrokerEncryptionOptions.builder()
//  .kmsKeyId(java.lang.String)
//  .useAwsOwnedKey(java.lang.Boolean)
//  .useAwsOwnedKey(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#kms_key_id MqBroker#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey">useAwsOwnedKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#kms_key_id MqBroker#kms_key_id}.

---

##### `useAwsOwnedKey`<sup>Optional</sup> <a name="useAwsOwnedKey" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey"></a>

```java
public java.lang.Object getUseAwsOwnedKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}.

---

### MqBrokerInstances <a name="MqBrokerInstances" id="@cdktf/provider-aws.mqBroker.MqBrokerInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerInstances;

MqBrokerInstances.builder()
    .build();
```


### MqBrokerLdapServerMetadata <a name="MqBrokerLdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerLdapServerMetadata;

MqBrokerLdapServerMetadata.builder()
//  .hosts(java.util.List<java.lang.String>)
//  .roleBase(java.lang.String)
//  .roleName(java.lang.String)
//  .roleSearchMatching(java.lang.String)
//  .roleSearchSubtree(java.lang.Boolean)
//  .roleSearchSubtree(IResolvable)
//  .serviceAccountPassword(java.lang.String)
//  .serviceAccountUsername(java.lang.String)
//  .userBase(java.lang.String)
//  .userRoleName(java.lang.String)
//  .userSearchMatching(java.lang.String)
//  .userSearchSubtree(java.lang.Boolean)
//  .userSearchSubtree(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#hosts MqBroker#hosts}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleBase">roleBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_base MqBroker#role_base}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_name MqBroker#role_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching">roleSearchMatching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_matching MqBroker#role_search_matching}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree">roleSearchSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_subtree MqBroker#role_search_subtree}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword">serviceAccountPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_password MqBroker#service_account_password}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername">serviceAccountUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_username MqBroker#service_account_username}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userBase">userBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_base MqBroker#user_base}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName">userRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_role_name MqBroker#user_role_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching">userSearchMatching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_matching MqBroker#user_search_matching}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree">userSearchSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_subtree MqBroker#user_search_subtree}. |

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#hosts MqBroker#hosts}.

---

##### `roleBase`<sup>Optional</sup> <a name="roleBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleBase"></a>

```java
public java.lang.String getRoleBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_base MqBroker#role_base}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_name MqBroker#role_name}.

---

##### `roleSearchMatching`<sup>Optional</sup> <a name="roleSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching"></a>

```java
public java.lang.String getRoleSearchMatching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_matching MqBroker#role_search_matching}.

---

##### `roleSearchSubtree`<sup>Optional</sup> <a name="roleSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree"></a>

```java
public java.lang.Object getRoleSearchSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_subtree MqBroker#role_search_subtree}.

---

##### `serviceAccountPassword`<sup>Optional</sup> <a name="serviceAccountPassword" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword"></a>

```java
public java.lang.String getServiceAccountPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_password MqBroker#service_account_password}.

---

##### `serviceAccountUsername`<sup>Optional</sup> <a name="serviceAccountUsername" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername"></a>

```java
public java.lang.String getServiceAccountUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_username MqBroker#service_account_username}.

---

##### `userBase`<sup>Optional</sup> <a name="userBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userBase"></a>

```java
public java.lang.String getUserBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_base MqBroker#user_base}.

---

##### `userRoleName`<sup>Optional</sup> <a name="userRoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName"></a>

```java
public java.lang.String getUserRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_role_name MqBroker#user_role_name}.

---

##### `userSearchMatching`<sup>Optional</sup> <a name="userSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching"></a>

```java
public java.lang.String getUserSearchMatching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_matching MqBroker#user_search_matching}.

---

##### `userSearchSubtree`<sup>Optional</sup> <a name="userSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree"></a>

```java
public java.lang.Object getUserSearchSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_subtree MqBroker#user_search_subtree}.

---

### MqBrokerLogs <a name="MqBrokerLogs" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerLogs;

MqBrokerLogs.builder()
//  .audit(java.lang.String)
//  .general(java.lang.Boolean)
//  .general(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.audit">audit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#audit MqBroker#audit}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.general">general</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#general MqBroker#general}. |

---

##### `audit`<sup>Optional</sup> <a name="audit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.audit"></a>

```java
public java.lang.String getAudit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#audit MqBroker#audit}.

---

##### `general`<sup>Optional</sup> <a name="general" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.general"></a>

```java
public java.lang.Object getGeneral();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#general MqBroker#general}.

---

### MqBrokerMaintenanceWindowStartTime <a name="MqBrokerMaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerMaintenanceWindowStartTime;

MqBrokerMaintenanceWindowStartTime.builder()
    .dayOfWeek(java.lang.String)
    .timeOfDay(java.lang.String)
    .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#day_of_week MqBroker#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_of_day MqBroker#time_of_day}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_zone MqBroker#time_zone}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#day_of_week MqBroker#day_of_week}.

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_of_day MqBroker#time_of_day}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_zone MqBroker#time_zone}.

---

### MqBrokerTimeouts <a name="MqBrokerTimeouts" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerTimeouts;

MqBrokerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#create MqBroker#create}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#delete MqBroker#delete}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#update MqBroker#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#create MqBroker#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#delete MqBroker#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#update MqBroker#update}.

---

### MqBrokerUser <a name="MqBrokerUser" id="@cdktf/provider-aws.mqBroker.MqBrokerUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerUser;

MqBrokerUser.builder()
    .password(java.lang.String)
    .username(java.lang.String)
//  .consoleAccess(java.lang.Boolean)
//  .consoleAccess(IResolvable)
//  .groups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#password MqBroker#password}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#username MqBroker#username}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.consoleAccess">consoleAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#console_access MqBroker#console_access}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#groups MqBroker#groups}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#password MqBroker#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#username MqBroker#username}.

---

##### `consoleAccess`<sup>Optional</sup> <a name="consoleAccess" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.consoleAccess"></a>

```java
public java.lang.Object getConsoleAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#console_access MqBroker#console_access}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#groups MqBroker#groups}.

---

## Classes <a name="Classes" id="Classes"></a>

### MqBrokerConfigurationOutputReference <a name="MqBrokerConfigurationOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerConfigurationOutputReference;

new MqBrokerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetRevision"></a>

```java
public void resetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue"></a>

```java
public MqBrokerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---


### MqBrokerEncryptionOptionsOutputReference <a name="MqBrokerEncryptionOptionsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerEncryptionOptionsOutputReference;

new MqBrokerEncryptionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey">resetUseAwsOwnedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetUseAwsOwnedKey` <a name="resetUseAwsOwnedKey" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey"></a>

```java
public void resetUseAwsOwnedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput">useAwsOwnedKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey">useAwsOwnedKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `useAwsOwnedKeyInput`<sup>Optional</sup> <a name="useAwsOwnedKeyInput" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput"></a>

```java
public java.lang.Object getUseAwsOwnedKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `useAwsOwnedKey`<sup>Required</sup> <a name="useAwsOwnedKey" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey"></a>

```java
public java.lang.Object getUseAwsOwnedKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue"></a>

```java
public MqBrokerEncryptionOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---


### MqBrokerInstancesList <a name="MqBrokerInstancesList" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerInstancesList;

new MqBrokerInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get"></a>

```java
public MqBrokerInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MqBrokerInstancesOutputReference <a name="MqBrokerInstancesOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerInstancesOutputReference;

new MqBrokerInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl">consoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.endpoints">endpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstances">MqBrokerInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl"></a>

```java
public java.lang.String getConsoleUrl();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.endpoints"></a>

```java
public java.util.List<java.lang.String> getEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.internalValue"></a>

```java
public MqBrokerInstances getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstances">MqBrokerInstances</a>

---


### MqBrokerLdapServerMetadataOutputReference <a name="MqBrokerLdapServerMetadataOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerLdapServerMetadataOutputReference;

new MqBrokerLdapServerMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase">resetRoleBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching">resetRoleSearchMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree">resetRoleSearchSubtree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword">resetServiceAccountPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername">resetServiceAccountUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase">resetUserBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName">resetUserRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching">resetUserSearchMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree">resetUserSearchSubtree</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetRoleBase` <a name="resetRoleBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase"></a>

```java
public void resetRoleBase()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetRoleSearchMatching` <a name="resetRoleSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching"></a>

```java
public void resetRoleSearchMatching()
```

##### `resetRoleSearchSubtree` <a name="resetRoleSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree"></a>

```java
public void resetRoleSearchSubtree()
```

##### `resetServiceAccountPassword` <a name="resetServiceAccountPassword" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword"></a>

```java
public void resetServiceAccountPassword()
```

##### `resetServiceAccountUsername` <a name="resetServiceAccountUsername" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername"></a>

```java
public void resetServiceAccountUsername()
```

##### `resetUserBase` <a name="resetUserBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase"></a>

```java
public void resetUserBase()
```

##### `resetUserRoleName` <a name="resetUserRoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName"></a>

```java
public void resetUserRoleName()
```

##### `resetUserSearchMatching` <a name="resetUserSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching"></a>

```java
public void resetUserSearchMatching()
```

##### `resetUserSearchSubtree` <a name="resetUserSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree"></a>

```java
public void resetUserSearchSubtree()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput">roleBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput">roleSearchMatchingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput">roleSearchSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput">serviceAccountPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput">serviceAccountUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput">userBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput">userRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput">userSearchMatchingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput">userSearchSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase">roleBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching">roleSearchMatching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree">roleSearchSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword">serviceAccountPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername">serviceAccountUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase">userBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName">userRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching">userSearchMatching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree">userSearchSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleBaseInput`<sup>Optional</sup> <a name="roleBaseInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput"></a>

```java
public java.lang.String getRoleBaseInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `roleSearchMatchingInput`<sup>Optional</sup> <a name="roleSearchMatchingInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput"></a>

```java
public java.lang.String getRoleSearchMatchingInput();
```

- *Type:* java.lang.String

---

##### `roleSearchSubtreeInput`<sup>Optional</sup> <a name="roleSearchSubtreeInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput"></a>

```java
public java.lang.Object getRoleSearchSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAccountPasswordInput`<sup>Optional</sup> <a name="serviceAccountPasswordInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput"></a>

```java
public java.lang.String getServiceAccountPasswordInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountUsernameInput`<sup>Optional</sup> <a name="serviceAccountUsernameInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput"></a>

```java
public java.lang.String getServiceAccountUsernameInput();
```

- *Type:* java.lang.String

---

##### `userBaseInput`<sup>Optional</sup> <a name="userBaseInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput"></a>

```java
public java.lang.String getUserBaseInput();
```

- *Type:* java.lang.String

---

##### `userRoleNameInput`<sup>Optional</sup> <a name="userRoleNameInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput"></a>

```java
public java.lang.String getUserRoleNameInput();
```

- *Type:* java.lang.String

---

##### `userSearchMatchingInput`<sup>Optional</sup> <a name="userSearchMatchingInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput"></a>

```java
public java.lang.String getUserSearchMatchingInput();
```

- *Type:* java.lang.String

---

##### `userSearchSubtreeInput`<sup>Optional</sup> <a name="userSearchSubtreeInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput"></a>

```java
public java.lang.Object getUserSearchSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleBase`<sup>Required</sup> <a name="roleBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase"></a>

```java
public java.lang.String getRoleBase();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `roleSearchMatching`<sup>Required</sup> <a name="roleSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching"></a>

```java
public java.lang.String getRoleSearchMatching();
```

- *Type:* java.lang.String

---

##### `roleSearchSubtree`<sup>Required</sup> <a name="roleSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree"></a>

```java
public java.lang.Object getRoleSearchSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAccountPassword`<sup>Required</sup> <a name="serviceAccountPassword" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword"></a>

```java
public java.lang.String getServiceAccountPassword();
```

- *Type:* java.lang.String

---

##### `serviceAccountUsername`<sup>Required</sup> <a name="serviceAccountUsername" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername"></a>

```java
public java.lang.String getServiceAccountUsername();
```

- *Type:* java.lang.String

---

##### `userBase`<sup>Required</sup> <a name="userBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase"></a>

```java
public java.lang.String getUserBase();
```

- *Type:* java.lang.String

---

##### `userRoleName`<sup>Required</sup> <a name="userRoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName"></a>

```java
public java.lang.String getUserRoleName();
```

- *Type:* java.lang.String

---

##### `userSearchMatching`<sup>Required</sup> <a name="userSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching"></a>

```java
public java.lang.String getUserSearchMatching();
```

- *Type:* java.lang.String

---

##### `userSearchSubtree`<sup>Required</sup> <a name="userSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree"></a>

```java
public java.lang.Object getUserSearchSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue"></a>

```java
public MqBrokerLdapServerMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---


### MqBrokerLogsOutputReference <a name="MqBrokerLogsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerLogsOutputReference;

new MqBrokerLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetAudit">resetAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetGeneral">resetGeneral</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudit` <a name="resetAudit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetAudit"></a>

```java
public void resetAudit()
```

##### `resetGeneral` <a name="resetGeneral" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetGeneral"></a>

```java
public void resetGeneral()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.auditInput">auditInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.generalInput">generalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.audit">audit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.general">general</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditInput`<sup>Optional</sup> <a name="auditInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.auditInput"></a>

```java
public java.lang.String getAuditInput();
```

- *Type:* java.lang.String

---

##### `generalInput`<sup>Optional</sup> <a name="generalInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.generalInput"></a>

```java
public java.lang.Object getGeneralInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `audit`<sup>Required</sup> <a name="audit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.audit"></a>

```java
public java.lang.String getAudit();
```

- *Type:* java.lang.String

---

##### `general`<sup>Required</sup> <a name="general" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.general"></a>

```java
public java.lang.Object getGeneral();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.internalValue"></a>

```java
public MqBrokerLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---


### MqBrokerMaintenanceWindowStartTimeOutputReference <a name="MqBrokerMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerMaintenanceWindowStartTimeOutputReference;

new MqBrokerMaintenanceWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput"></a>

```java
public java.lang.String getTimeOfDayInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```java
public MqBrokerMaintenanceWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---


### MqBrokerTimeoutsOutputReference <a name="MqBrokerTimeoutsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerTimeoutsOutputReference;

new MqBrokerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### MqBrokerUserList <a name="MqBrokerUserList" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerUserList;

new MqBrokerUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.get"></a>

```java
public MqBrokerUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a>>

---


### MqBrokerUserOutputReference <a name="MqBrokerUserOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mq_broker.MqBrokerUserOutputReference;

new MqBrokerUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess">resetConsoleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetGroups">resetGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsoleAccess` <a name="resetConsoleAccess" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess"></a>

```java
public void resetConsoleAccess()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetGroups"></a>

```java
public void resetGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput">consoleAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccess">consoleAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consoleAccessInput`<sup>Optional</sup> <a name="consoleAccessInput" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput"></a>

```java
public java.lang.Object getConsoleAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `consoleAccess`<sup>Required</sup> <a name="consoleAccess" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccess"></a>

```java
public java.lang.Object getConsoleAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser">MqBrokerUser</a> OR com.hashicorp.cdktf.IResolvable

---



