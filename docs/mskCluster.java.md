# `mskCluster` Submodule <a name="`mskCluster` Submodule" id="@cdktf/provider-aws.mskCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskCluster <a name="MskCluster" id="@cdktf/provider-aws.mskCluster.MskCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster aws_msk_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskCluster;

MskCluster.Builder.create(Construct scope, java.lang.String id)
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
    .brokerNodeGroupInfo(MskClusterBrokerNodeGroupInfo)
    .clusterName(java.lang.String)
    .kafkaVersion(java.lang.String)
    .numberOfBrokerNodes(java.lang.Number)
//  .clientAuthentication(MskClusterClientAuthentication)
//  .configurationInfo(MskClusterConfigurationInfo)
//  .encryptionInfo(MskClusterEncryptionInfo)
//  .enhancedMonitoring(java.lang.String)
//  .id(java.lang.String)
//  .loggingInfo(MskClusterLoggingInfo)
//  .openMonitoring(MskClusterOpenMonitoring)
//  .storageMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MskClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.brokerNodeGroupInfo">brokerNodeGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | broker_node_group_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.kafkaVersion">kafkaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.numberOfBrokerNodes">numberOfBrokerNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.configurationInfo">configurationInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | configuration_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.encryptionInfo">encryptionInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | encryption_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.enhancedMonitoring">enhancedMonitoring</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#id MskCluster#id}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | logging_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.openMonitoring">openMonitoring</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | open_monitoring block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.storageMode">storageMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_mode MskCluster#storage_mode}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brokerNodeGroupInfo`<sup>Required</sup> <a name="brokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.brokerNodeGroupInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

broker_node_group_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}.

---

##### `kafkaVersion`<sup>Required</sup> <a name="kafkaVersion" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.kafkaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}.

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="numberOfBrokerNodes" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.numberOfBrokerNodes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}.

---

##### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.clientAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_authentication MskCluster#client_authentication}

---

##### `configurationInfo`<sup>Optional</sup> <a name="configurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.configurationInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

configuration_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#configuration_info MskCluster#configuration_info}

---

##### `encryptionInfo`<sup>Optional</sup> <a name="encryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.encryptionInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

encryption_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_info MskCluster#encryption_info}

---

##### `enhancedMonitoring`<sup>Optional</sup> <a name="enhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.enhancedMonitoring"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#id MskCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingInfo`<sup>Optional</sup> <a name="loggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.loggingInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

logging_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#logging_info MskCluster#logging_info}

---

##### `openMonitoring`<sup>Optional</sup> <a name="openMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.openMonitoring"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

open_monitoring block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#open_monitoring MskCluster#open_monitoring}

---

##### `storageMode`<sup>Optional</sup> <a name="storageMode" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.storageMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_mode MskCluster#storage_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#timeouts MskCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo">putBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication">putClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo">putConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo">putEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo">putLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring">putOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetClientAuthentication">resetClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetConfigurationInfo">resetConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetEncryptionInfo">resetEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetEnhancedMonitoring">resetEnhancedMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetLoggingInfo">resetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetOpenMonitoring">resetOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetStorageMode">resetStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.mskCluster.MskCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.mskCluster.MskCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBrokerNodeGroupInfo` <a name="putBrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo"></a>

```java
public void putBrokerNodeGroupInfo(MskClusterBrokerNodeGroupInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `putClientAuthentication` <a name="putClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication"></a>

```java
public void putClientAuthentication(MskClusterClientAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `putConfigurationInfo` <a name="putConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo"></a>

```java
public void putConfigurationInfo(MskClusterConfigurationInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `putEncryptionInfo` <a name="putEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo"></a>

```java
public void putEncryptionInfo(MskClusterEncryptionInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `putLoggingInfo` <a name="putLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo"></a>

```java
public void putLoggingInfo(MskClusterLoggingInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `putOpenMonitoring` <a name="putOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring"></a>

```java
public void putOpenMonitoring(MskClusterOpenMonitoring value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts"></a>

```java
public void putTimeouts(MskClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a>

---

##### `resetClientAuthentication` <a name="resetClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.resetClientAuthentication"></a>

```java
public void resetClientAuthentication()
```

##### `resetConfigurationInfo` <a name="resetConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetConfigurationInfo"></a>

```java
public void resetConfigurationInfo()
```

##### `resetEncryptionInfo` <a name="resetEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetEncryptionInfo"></a>

```java
public void resetEncryptionInfo()
```

##### `resetEnhancedMonitoring` <a name="resetEnhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.resetEnhancedMonitoring"></a>

```java
public void resetEnhancedMonitoring()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mskCluster.MskCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingInfo` <a name="resetLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetLoggingInfo"></a>

```java
public void resetLoggingInfo()
```

##### `resetOpenMonitoring` <a name="resetOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.resetOpenMonitoring"></a>

```java
public void resetOpenMonitoring()
```

##### `resetStorageMode` <a name="resetStorageMode" id="@cdktf/provider-aws.mskCluster.MskCluster.resetStorageMode"></a>

```java
public void resetStorageMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.mskCluster.MskCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskCluster;

MskCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskCluster.MskCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskCluster;

MskCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskCluster;

MskCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokers">bootstrapBrokers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslIam">bootstrapBrokersPublicSaslIam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslScram">bootstrapBrokersPublicSaslScram</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicTls">bootstrapBrokersPublicTls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslIam">bootstrapBrokersSaslIam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslScram">bootstrapBrokersSaslScram</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersTls">bootstrapBrokersTls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfo">brokerNodeGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfo">configurationInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.currentVersion">currentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfo">encryptionInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoring">openMonitoring</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference">MskClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectString">zookeeperConnectString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectStringTls">zookeeperConnectStringTls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfoInput">brokerNodeGroupInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthenticationInput">clientAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfoInput">configurationInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfoInput">encryptionInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoringInput">enhancedMonitoringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersionInput">kafkaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfoInput">loggingInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodesInput">numberOfBrokerNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoringInput">openMonitoringInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.storageModeInput">storageModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoring">enhancedMonitoring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersion">kafkaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodes">numberOfBrokerNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.storageMode">storageMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mskCluster.MskCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.mskCluster.MskCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.mskCluster.MskCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskCluster.MskCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskCluster.MskCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskCluster.MskCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskCluster.MskCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskCluster.MskCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskCluster.MskCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokers`<sup>Required</sup> <a name="bootstrapBrokers" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokers"></a>

```java
public java.lang.String getBootstrapBrokers();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersPublicSaslIam`<sup>Required</sup> <a name="bootstrapBrokersPublicSaslIam" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslIam"></a>

```java
public java.lang.String getBootstrapBrokersPublicSaslIam();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersPublicSaslScram`<sup>Required</sup> <a name="bootstrapBrokersPublicSaslScram" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslScram"></a>

```java
public java.lang.String getBootstrapBrokersPublicSaslScram();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersPublicTls`<sup>Required</sup> <a name="bootstrapBrokersPublicTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicTls"></a>

```java
public java.lang.String getBootstrapBrokersPublicTls();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersSaslIam`<sup>Required</sup> <a name="bootstrapBrokersSaslIam" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslIam"></a>

```java
public java.lang.String getBootstrapBrokersSaslIam();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersSaslScram`<sup>Required</sup> <a name="bootstrapBrokersSaslScram" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslScram"></a>

```java
public java.lang.String getBootstrapBrokersSaslScram();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersTls`<sup>Required</sup> <a name="bootstrapBrokersTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersTls"></a>

```java
public java.lang.String getBootstrapBrokersTls();
```

- *Type:* java.lang.String

---

##### `brokerNodeGroupInfo`<sup>Required</sup> <a name="brokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfo"></a>

```java
public MskClusterBrokerNodeGroupInfoOutputReference getBrokerNodeGroupInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a>

---

##### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthentication"></a>

```java
public MskClusterClientAuthenticationOutputReference getClientAuthentication();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a>

---

##### `configurationInfo`<sup>Required</sup> <a name="configurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfo"></a>

```java
public MskClusterConfigurationInfoOutputReference getConfigurationInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a>

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktf/provider-aws.mskCluster.MskCluster.property.currentVersion"></a>

```java
public java.lang.String getCurrentVersion();
```

- *Type:* java.lang.String

---

##### `encryptionInfo`<sup>Required</sup> <a name="encryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfo"></a>

```java
public MskClusterEncryptionInfoOutputReference getEncryptionInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a>

---

##### `loggingInfo`<sup>Required</sup> <a name="loggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfo"></a>

```java
public MskClusterLoggingInfoOutputReference getLoggingInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a>

---

##### `openMonitoring`<sup>Required</sup> <a name="openMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoring"></a>

```java
public MskClusterOpenMonitoringOutputReference getOpenMonitoring();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.property.timeouts"></a>

```java
public MskClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference">MskClusterTimeoutsOutputReference</a>

---

##### `zookeeperConnectString`<sup>Required</sup> <a name="zookeeperConnectString" id="@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectString"></a>

```java
public java.lang.String getZookeeperConnectString();
```

- *Type:* java.lang.String

---

##### `zookeeperConnectStringTls`<sup>Required</sup> <a name="zookeeperConnectStringTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectStringTls"></a>

```java
public java.lang.String getZookeeperConnectStringTls();
```

- *Type:* java.lang.String

---

##### `brokerNodeGroupInfoInput`<sup>Optional</sup> <a name="brokerNodeGroupInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfoInput"></a>

```java
public MskClusterBrokerNodeGroupInfo getBrokerNodeGroupInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `clientAuthenticationInput`<sup>Optional</sup> <a name="clientAuthenticationInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthenticationInput"></a>

```java
public MskClusterClientAuthentication getClientAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `configurationInfoInput`<sup>Optional</sup> <a name="configurationInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfoInput"></a>

```java
public MskClusterConfigurationInfo getConfigurationInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `encryptionInfoInput`<sup>Optional</sup> <a name="encryptionInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfoInput"></a>

```java
public MskClusterEncryptionInfo getEncryptionInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `enhancedMonitoringInput`<sup>Optional</sup> <a name="enhancedMonitoringInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoringInput"></a>

```java
public java.lang.String getEnhancedMonitoringInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kafkaVersionInput`<sup>Optional</sup> <a name="kafkaVersionInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersionInput"></a>

```java
public java.lang.String getKafkaVersionInput();
```

- *Type:* java.lang.String

---

##### `loggingInfoInput`<sup>Optional</sup> <a name="loggingInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfoInput"></a>

```java
public MskClusterLoggingInfo getLoggingInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `numberOfBrokerNodesInput`<sup>Optional</sup> <a name="numberOfBrokerNodesInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodesInput"></a>

```java
public java.lang.Number getNumberOfBrokerNodesInput();
```

- *Type:* java.lang.Number

---

##### `openMonitoringInput`<sup>Optional</sup> <a name="openMonitoringInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoringInput"></a>

```java
public MskClusterOpenMonitoring getOpenMonitoringInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `storageModeInput`<sup>Optional</sup> <a name="storageModeInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.storageModeInput"></a>

```java
public java.lang.String getStorageModeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `enhancedMonitoring`<sup>Required</sup> <a name="enhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoring"></a>

```java
public java.lang.String getEnhancedMonitoring();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskCluster.MskCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kafkaVersion`<sup>Required</sup> <a name="kafkaVersion" id="@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersion"></a>

```java
public java.lang.String getKafkaVersion();
```

- *Type:* java.lang.String

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="numberOfBrokerNodes" id="@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodes"></a>

```java
public java.lang.Number getNumberOfBrokerNodes();
```

- *Type:* java.lang.Number

---

##### `storageMode`<sup>Required</sup> <a name="storageMode" id="@cdktf/provider-aws.mskCluster.MskCluster.property.storageMode"></a>

```java
public java.lang.String getStorageMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MskClusterBrokerNodeGroupInfo <a name="MskClusterBrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfo;

MskClusterBrokerNodeGroupInfo.builder()
    .clientSubnets(java.util.List<java.lang.String>)
    .instanceType(java.lang.String)
    .securityGroups(java.util.List<java.lang.String>)
//  .azDistribution(java.lang.String)
//  .connectivityInfo(MskClusterBrokerNodeGroupInfoConnectivityInfo)
//  .ebsVolumeSize(java.lang.Number)
//  .storageInfo(MskClusterBrokerNodeGroupInfoStorageInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets">clientSubnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_subnets MskCluster#client_subnets}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#instance_type MskCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#security_groups MskCluster#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.azDistribution">azDistribution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#az_distribution MskCluster#az_distribution}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | connectivity_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.ebsVolumeSize">ebsVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_volume_size MskCluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo">storageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | storage_info block. |

---

##### `clientSubnets`<sup>Required</sup> <a name="clientSubnets" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets"></a>

```java
public java.util.List<java.lang.String> getClientSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_subnets MskCluster#client_subnets}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#instance_type MskCluster#instance_type}.

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#security_groups MskCluster#security_groups}.

---

##### `azDistribution`<sup>Optional</sup> <a name="azDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.azDistribution"></a>

```java
public java.lang.String getAzDistribution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#az_distribution MskCluster#az_distribution}.

---

##### `connectivityInfo`<sup>Optional</sup> <a name="connectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo"></a>

```java
public MskClusterBrokerNodeGroupInfoConnectivityInfo getConnectivityInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

connectivity_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#connectivity_info MskCluster#connectivity_info}

---

##### `ebsVolumeSize`<sup>Optional</sup> <a name="ebsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.ebsVolumeSize"></a>

```java
public java.lang.Number getEbsVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_volume_size MskCluster#ebs_volume_size}.

---

##### `storageInfo`<sup>Optional</sup> <a name="storageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfo getStorageInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

storage_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_info MskCluster#storage_info}

---

### MskClusterBrokerNodeGroupInfoConnectivityInfo <a name="MskClusterBrokerNodeGroupInfoConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoConnectivityInfo;

MskClusterBrokerNodeGroupInfoConnectivityInfo.builder()
//  .publicAccess(MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess">publicAccess</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | public_access block. |

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess"></a>

```java
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess getPublicAccess();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

public_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#public_access MskCluster#public_access}

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess;

MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#type MskCluster#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#type MskCluster#type}.

---

### MskClusterBrokerNodeGroupInfoStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoStorageInfo;

MskClusterBrokerNodeGroupInfoStorageInfo.builder()
//  .ebsStorageInfo(MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo">ebsStorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | ebs_storage_info block. |

---

##### `ebsStorageInfo`<sup>Optional</sup> <a name="ebsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo getEbsStorageInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

ebs_storage_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo;

MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.builder()
//  .provisionedThroughput(MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput)
//  .volumeSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | provisioned_throughput block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_size MskCluster#volume_size}. |

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput getProvisionedThroughput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

provisioned_throughput block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_size MskCluster#volume_size}.

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;

MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .volumeThroughput(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput">volumeThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_throughput MskCluster#volume_throughput}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `volumeThroughput`<sup>Optional</sup> <a name="volumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput"></a>

```java
public java.lang.Number getVolumeThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_throughput MskCluster#volume_throughput}.

---

### MskClusterClientAuthentication <a name="MskClusterClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterClientAuthentication;

MskClusterClientAuthentication.builder()
//  .sasl(MskClusterClientAuthenticationSasl)
//  .tls(MskClusterClientAuthenticationTls)
//  .unauthenticated(java.lang.Boolean)
//  .unauthenticated(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.sasl">sasl</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | sasl block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | tls block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.unauthenticated">unauthenticated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#unauthenticated MskCluster#unauthenticated}. |

---

##### `sasl`<sup>Optional</sup> <a name="sasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.sasl"></a>

```java
public MskClusterClientAuthenticationSasl getSasl();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

sasl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#sasl MskCluster#sasl}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.tls"></a>

```java
public MskClusterClientAuthenticationTls getTls();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tls MskCluster#tls}

---

##### `unauthenticated`<sup>Optional</sup> <a name="unauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.unauthenticated"></a>

```java
public java.lang.Object getUnauthenticated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#unauthenticated MskCluster#unauthenticated}.

---

### MskClusterClientAuthenticationSasl <a name="MskClusterClientAuthenticationSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterClientAuthenticationSasl;

MskClusterClientAuthenticationSasl.builder()
//  .iam(java.lang.Boolean)
//  .iam(IResolvable)
//  .scram(java.lang.Boolean)
//  .scram(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.iam">iam</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#iam MskCluster#iam}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.scram">scram</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#scram MskCluster#scram}. |

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.iam"></a>

```java
public java.lang.Object getIam();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#iam MskCluster#iam}.

---

##### `scram`<sup>Optional</sup> <a name="scram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.scram"></a>

```java
public java.lang.Object getScram();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#scram MskCluster#scram}.

---

### MskClusterClientAuthenticationTls <a name="MskClusterClientAuthenticationTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterClientAuthenticationTls;

MskClusterClientAuthenticationTls.builder()
//  .certificateAuthorityArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArns">certificateAuthorityArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#certificate_authority_arns MskCluster#certificate_authority_arns}. |

---

##### `certificateAuthorityArns`<sup>Optional</sup> <a name="certificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArns"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#certificate_authority_arns MskCluster#certificate_authority_arns}.

---

### MskClusterConfig <a name="MskClusterConfig" id="@cdktf/provider-aws.mskCluster.MskClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterConfig;

MskClusterConfig.builder()
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
    .brokerNodeGroupInfo(MskClusterBrokerNodeGroupInfo)
    .clusterName(java.lang.String)
    .kafkaVersion(java.lang.String)
    .numberOfBrokerNodes(java.lang.Number)
//  .clientAuthentication(MskClusterClientAuthentication)
//  .configurationInfo(MskClusterConfigurationInfo)
//  .encryptionInfo(MskClusterEncryptionInfo)
//  .enhancedMonitoring(java.lang.String)
//  .id(java.lang.String)
//  .loggingInfo(MskClusterLoggingInfo)
//  .openMonitoring(MskClusterOpenMonitoring)
//  .storageMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MskClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo">brokerNodeGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | broker_node_group_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.kafkaVersion">kafkaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.numberOfBrokerNodes">numberOfBrokerNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.configurationInfo">configurationInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | configuration_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.encryptionInfo">encryptionInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | encryption_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.enhancedMonitoring">enhancedMonitoring</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#id MskCluster#id}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | logging_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.openMonitoring">openMonitoring</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | open_monitoring block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.storageMode">storageMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_mode MskCluster#storage_mode}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brokerNodeGroupInfo`<sup>Required</sup> <a name="brokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo"></a>

```java
public MskClusterBrokerNodeGroupInfo getBrokerNodeGroupInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

broker_node_group_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}.

---

##### `kafkaVersion`<sup>Required</sup> <a name="kafkaVersion" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.kafkaVersion"></a>

```java
public java.lang.String getKafkaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}.

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="numberOfBrokerNodes" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.numberOfBrokerNodes"></a>

```java
public java.lang.Number getNumberOfBrokerNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}.

---

##### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clientAuthentication"></a>

```java
public MskClusterClientAuthentication getClientAuthentication();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_authentication MskCluster#client_authentication}

---

##### `configurationInfo`<sup>Optional</sup> <a name="configurationInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.configurationInfo"></a>

```java
public MskClusterConfigurationInfo getConfigurationInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

configuration_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#configuration_info MskCluster#configuration_info}

---

##### `encryptionInfo`<sup>Optional</sup> <a name="encryptionInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.encryptionInfo"></a>

```java
public MskClusterEncryptionInfo getEncryptionInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

encryption_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_info MskCluster#encryption_info}

---

##### `enhancedMonitoring`<sup>Optional</sup> <a name="enhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.enhancedMonitoring"></a>

```java
public java.lang.String getEnhancedMonitoring();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#id MskCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingInfo`<sup>Optional</sup> <a name="loggingInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.loggingInfo"></a>

```java
public MskClusterLoggingInfo getLoggingInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

logging_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#logging_info MskCluster#logging_info}

---

##### `openMonitoring`<sup>Optional</sup> <a name="openMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.openMonitoring"></a>

```java
public MskClusterOpenMonitoring getOpenMonitoring();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

open_monitoring block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#open_monitoring MskCluster#open_monitoring}

---

##### `storageMode`<sup>Optional</sup> <a name="storageMode" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.storageMode"></a>

```java
public java.lang.String getStorageMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_mode MskCluster#storage_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.timeouts"></a>

```java
public MskClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#timeouts MskCluster#timeouts}

---

### MskClusterConfigurationInfo <a name="MskClusterConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterConfigurationInfo;

MskClusterConfigurationInfo.builder()
    .arn(java.lang.String)
    .revision(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#arn MskCluster#arn}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.revision">revision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#revision MskCluster#revision}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#arn MskCluster#arn}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#revision MskCluster#revision}.

---

### MskClusterEncryptionInfo <a name="MskClusterEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterEncryptionInfo;

MskClusterEncryptionInfo.builder()
//  .encryptionAtRestKmsKeyArn(java.lang.String)
//  .encryptionInTransit(MskClusterEncryptionInfoEncryptionInTransit)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRestKmsKeyArn">encryptionAtRestKmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit">encryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | encryption_in_transit block. |

---

##### `encryptionAtRestKmsKeyArn`<sup>Optional</sup> <a name="encryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRestKmsKeyArn"></a>

```java
public java.lang.String getEncryptionAtRestKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}.

---

##### `encryptionInTransit`<sup>Optional</sup> <a name="encryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit"></a>

```java
public MskClusterEncryptionInfoEncryptionInTransit getEncryptionInTransit();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

encryption_in_transit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}

---

### MskClusterEncryptionInfoEncryptionInTransit <a name="MskClusterEncryptionInfoEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterEncryptionInfoEncryptionInTransit;

MskClusterEncryptionInfoEncryptionInTransit.builder()
//  .clientBroker(java.lang.String)
//  .inCluster(java.lang.Boolean)
//  .inCluster(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker">clientBroker</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_broker MskCluster#client_broker}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster">inCluster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#in_cluster MskCluster#in_cluster}. |

---

##### `clientBroker`<sup>Optional</sup> <a name="clientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker"></a>

```java
public java.lang.String getClientBroker();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_broker MskCluster#client_broker}.

---

##### `inCluster`<sup>Optional</sup> <a name="inCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster"></a>

```java
public java.lang.Object getInCluster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#in_cluster MskCluster#in_cluster}.

---

### MskClusterLoggingInfo <a name="MskClusterLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfo;

MskClusterLoggingInfo.builder()
    .brokerLogs(MskClusterLoggingInfoBrokerLogs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.property.brokerLogs">brokerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | broker_logs block. |

---

##### `brokerLogs`<sup>Required</sup> <a name="brokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.property.brokerLogs"></a>

```java
public MskClusterLoggingInfoBrokerLogs getBrokerLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

broker_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_logs MskCluster#broker_logs}

---

### MskClusterLoggingInfoBrokerLogs <a name="MskClusterLoggingInfoBrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoBrokerLogs;

MskClusterLoggingInfoBrokerLogs.builder()
//  .cloudwatchLogs(MskClusterLoggingInfoBrokerLogsCloudwatchLogs)
//  .firehose(MskClusterLoggingInfoBrokerLogsFirehose)
//  .s3(MskClusterLoggingInfoBrokerLogsS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose">firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | s3 block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs"></a>

```java
public MskClusterLoggingInfoBrokerLogsCloudwatchLogs getCloudwatchLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose"></a>

```java
public MskClusterLoggingInfoBrokerLogsFirehose getFirehose();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#firehose MskCluster#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3"></a>

```java
public MskClusterLoggingInfoBrokerLogsS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#s3 MskCluster#s3}

---

### MskClusterLoggingInfoBrokerLogsCloudwatchLogs <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs;

MskClusterLoggingInfoBrokerLogsCloudwatchLogs.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .logGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#log_group MskCluster#log_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#log_group MskCluster#log_group}.

---

### MskClusterLoggingInfoBrokerLogsFirehose <a name="MskClusterLoggingInfoBrokerLogsFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoBrokerLogsFirehose;

MskClusterLoggingInfoBrokerLogsFirehose.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .deliveryStream(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delivery_stream MskCluster#delivery_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delivery_stream MskCluster#delivery_stream}.

---

### MskClusterLoggingInfoBrokerLogsS3 <a name="MskClusterLoggingInfoBrokerLogsS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoBrokerLogsS3;

MskClusterLoggingInfoBrokerLogsS3.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#bucket MskCluster#bucket}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prefix MskCluster#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#bucket MskCluster#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prefix MskCluster#prefix}.

---

### MskClusterOpenMonitoring <a name="MskClusterOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterOpenMonitoring;

MskClusterOpenMonitoring.builder()
    .prometheus(MskClusterOpenMonitoringPrometheus)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | prometheus block. |

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.property.prometheus"></a>

```java
public MskClusterOpenMonitoringPrometheus getPrometheus();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prometheus MskCluster#prometheus}

---

### MskClusterOpenMonitoringPrometheus <a name="MskClusterOpenMonitoringPrometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterOpenMonitoringPrometheus;

MskClusterOpenMonitoringPrometheus.builder()
//  .jmxExporter(MskClusterOpenMonitoringPrometheusJmxExporter)
//  .nodeExporter(MskClusterOpenMonitoringPrometheusNodeExporter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter">jmxExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | jmx_exporter block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter">nodeExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | node_exporter block. |

---

##### `jmxExporter`<sup>Optional</sup> <a name="jmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter"></a>

```java
public MskClusterOpenMonitoringPrometheusJmxExporter getJmxExporter();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

jmx_exporter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#jmx_exporter MskCluster#jmx_exporter}

---

##### `nodeExporter`<sup>Optional</sup> <a name="nodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter"></a>

```java
public MskClusterOpenMonitoringPrometheusNodeExporter getNodeExporter();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

node_exporter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#node_exporter MskCluster#node_exporter}

---

### MskClusterOpenMonitoringPrometheusJmxExporter <a name="MskClusterOpenMonitoringPrometheusJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterOpenMonitoringPrometheusJmxExporter;

MskClusterOpenMonitoringPrometheusJmxExporter.builder()
    .enabledInBroker(java.lang.Boolean)
    .enabledInBroker(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker">enabledInBroker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `enabledInBroker`<sup>Required</sup> <a name="enabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker"></a>

```java
public java.lang.Object getEnabledInBroker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterOpenMonitoringPrometheusNodeExporter <a name="MskClusterOpenMonitoringPrometheusNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterOpenMonitoringPrometheusNodeExporter;

MskClusterOpenMonitoringPrometheusNodeExporter.builder()
    .enabledInBroker(java.lang.Boolean)
    .enabledInBroker(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker">enabledInBroker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `enabledInBroker`<sup>Required</sup> <a name="enabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker"></a>

```java
public java.lang.Object getEnabledInBroker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterTimeouts <a name="MskClusterTimeouts" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterTimeouts;

MskClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#create MskCluster#create}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delete MskCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#update MskCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#create MskCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delete MskCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#update MskCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference;

new MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess">putPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicAccess` <a name="putPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess"></a>

```java
public void putPublicAccess(MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess"></a>

```java
public void resetPublicAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess">publicAccess</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess"></a>

```java
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference getPublicAccess();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a>

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput"></a>

```java
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess getPublicAccessInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue"></a>

```java
public MskClusterBrokerNodeGroupInfoConnectivityInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference;

new MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue"></a>

```java
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---


### MskClusterBrokerNodeGroupInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoOutputReference;

new MskClusterBrokerNodeGroupInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo">putConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo">putStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetAzDistribution">resetAzDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo">resetConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetEbsVolumeSize">resetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo">resetStorageInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectivityInfo` <a name="putConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo"></a>

```java
public void putConnectivityInfo(MskClusterBrokerNodeGroupInfoConnectivityInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `putStorageInfo` <a name="putStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo"></a>

```java
public void putStorageInfo(MskClusterBrokerNodeGroupInfoStorageInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `resetAzDistribution` <a name="resetAzDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetAzDistribution"></a>

```java
public void resetAzDistribution()
```

##### `resetConnectivityInfo` <a name="resetConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo"></a>

```java
public void resetConnectivityInfo()
```

##### `resetEbsVolumeSize` <a name="resetEbsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetEbsVolumeSize"></a>

```java
public void resetEbsVolumeSize()
```

##### `resetStorageInfo` <a name="resetStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo"></a>

```java
public void resetStorageInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo">storageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistributionInput">azDistributionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput">clientSubnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput">connectivityInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSizeInput">ebsVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput">storageInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistribution">azDistribution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets">clientSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSize">ebsVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectivityInfo`<sup>Required</sup> <a name="connectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo"></a>

```java
public MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference getConnectivityInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a>

---

##### `storageInfo`<sup>Required</sup> <a name="storageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoOutputReference getStorageInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a>

---

##### `azDistributionInput`<sup>Optional</sup> <a name="azDistributionInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistributionInput"></a>

```java
public java.lang.String getAzDistributionInput();
```

- *Type:* java.lang.String

---

##### `clientSubnetsInput`<sup>Optional</sup> <a name="clientSubnetsInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput"></a>

```java
public java.util.List<java.lang.String> getClientSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectivityInfoInput`<sup>Optional</sup> <a name="connectivityInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput"></a>

```java
public MskClusterBrokerNodeGroupInfoConnectivityInfo getConnectivityInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `ebsVolumeSizeInput`<sup>Optional</sup> <a name="ebsVolumeSizeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSizeInput"></a>

```java
public java.lang.Number getEbsVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageInfoInput`<sup>Optional</sup> <a name="storageInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfo getStorageInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `azDistribution`<sup>Required</sup> <a name="azDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistribution"></a>

```java
public java.lang.String getAzDistribution();
```

- *Type:* java.lang.String

---

##### `clientSubnets`<sup>Required</sup> <a name="clientSubnets" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets"></a>

```java
public java.util.List<java.lang.String> getClientSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ebsVolumeSize`<sup>Required</sup> <a name="ebsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSize"></a>

```java
public java.lang.Number getEbsVolumeSize();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue"></a>

```java
public MskClusterBrokerNodeGroupInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput">putProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProvisionedThroughput` <a name="putProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput"></a>

```java
public void putProvisionedThroughput(MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput"></a>

```java
public void resetProvisionedThroughput()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference getProvisionedThroughput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a>

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput getProvisionedThroughputInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput">resetVolumeThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetVolumeThroughput` <a name="resetVolumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput"></a>

```java
public void resetVolumeThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput">volumeThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput">volumeThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeThroughputInput`<sup>Optional</sup> <a name="volumeThroughputInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput"></a>

```java
public java.lang.Number getVolumeThroughputInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeThroughput`<sup>Required</sup> <a name="volumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput"></a>

```java
public java.lang.Number getVolumeThroughput();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference;

new MskClusterBrokerNodeGroupInfoStorageInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo">putEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo">resetEbsStorageInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsStorageInfo` <a name="putEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo"></a>

```java
public void putEbsStorageInfo(MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `resetEbsStorageInfo` <a name="resetEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo"></a>

```java
public void resetEbsStorageInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo">ebsStorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput">ebsStorageInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsStorageInfo`<sup>Required</sup> <a name="ebsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference getEbsStorageInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a>

---

##### `ebsStorageInfoInput`<sup>Optional</sup> <a name="ebsStorageInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo getEbsStorageInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue"></a>

```java
public MskClusterBrokerNodeGroupInfoStorageInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---


### MskClusterClientAuthenticationOutputReference <a name="MskClusterClientAuthenticationOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterClientAuthenticationOutputReference;

new MskClusterClientAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl">putSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl">resetSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated">resetUnauthenticated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSasl` <a name="putSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl"></a>

```java
public void putSasl(MskClusterClientAuthenticationSasl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `putTls` <a name="putTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls"></a>

```java
public void putTls(MskClusterClientAuthenticationTls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `resetSasl` <a name="resetSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl"></a>

```java
public void resetSasl()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls"></a>

```java
public void resetTls()
```

##### `resetUnauthenticated` <a name="resetUnauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated"></a>

```java
public void resetUnauthenticated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl">sasl</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput">saslInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput">tlsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput">unauthenticatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated">unauthenticated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sasl`<sup>Required</sup> <a name="sasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl"></a>

```java
public MskClusterClientAuthenticationSaslOutputReference getSasl();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls"></a>

```java
public MskClusterClientAuthenticationTlsOutputReference getTls();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a>

---

##### `saslInput`<sup>Optional</sup> <a name="saslInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput"></a>

```java
public MskClusterClientAuthenticationSasl getSaslInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput"></a>

```java
public MskClusterClientAuthenticationTls getTlsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `unauthenticatedInput`<sup>Optional</sup> <a name="unauthenticatedInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput"></a>

```java
public java.lang.Object getUnauthenticatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unauthenticated`<sup>Required</sup> <a name="unauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated"></a>

```java
public java.lang.Object getUnauthenticated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue"></a>

```java
public MskClusterClientAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---


### MskClusterClientAuthenticationSaslOutputReference <a name="MskClusterClientAuthenticationSaslOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterClientAuthenticationSaslOutputReference;

new MskClusterClientAuthenticationSaslOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam">resetIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram">resetScram</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIam` <a name="resetIam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam"></a>

```java
public void resetIam()
```

##### `resetScram` <a name="resetScram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram"></a>

```java
public void resetScram()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput">iamInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput">scramInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam">iam</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram">scram</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput"></a>

```java
public java.lang.Object getIamInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scramInput`<sup>Optional</sup> <a name="scramInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput"></a>

```java
public java.lang.Object getScramInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam"></a>

```java
public java.lang.Object getIam();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scram`<sup>Required</sup> <a name="scram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram"></a>

```java
public java.lang.Object getScram();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue"></a>

```java
public MskClusterClientAuthenticationSasl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---


### MskClusterClientAuthenticationTlsOutputReference <a name="MskClusterClientAuthenticationTlsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterClientAuthenticationTlsOutputReference;

new MskClusterClientAuthenticationTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArns">resetCertificateAuthorityArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateAuthorityArns` <a name="resetCertificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArns"></a>

```java
public void resetCertificateAuthorityArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnsInput">certificateAuthorityArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArns">certificateAuthorityArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityArnsInput`<sup>Optional</sup> <a name="certificateAuthorityArnsInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnsInput"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateAuthorityArns`<sup>Required</sup> <a name="certificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArns"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue"></a>

```java
public MskClusterClientAuthenticationTls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---


### MskClusterConfigurationInfoOutputReference <a name="MskClusterConfigurationInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterConfigurationInfoOutputReference;

new MskClusterConfigurationInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue"></a>

```java
public MskClusterConfigurationInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---


### MskClusterEncryptionInfoEncryptionInTransitOutputReference <a name="MskClusterEncryptionInfoEncryptionInTransitOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference;

new MskClusterEncryptionInfoEncryptionInTransitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker">resetClientBroker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster">resetInCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientBroker` <a name="resetClientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker"></a>

```java
public void resetClientBroker()
```

##### `resetInCluster` <a name="resetInCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster"></a>

```java
public void resetInCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput">clientBrokerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput">inClusterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker">clientBroker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster">inCluster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientBrokerInput`<sup>Optional</sup> <a name="clientBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput"></a>

```java
public java.lang.String getClientBrokerInput();
```

- *Type:* java.lang.String

---

##### `inClusterInput`<sup>Optional</sup> <a name="inClusterInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput"></a>

```java
public java.lang.Object getInClusterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientBroker`<sup>Required</sup> <a name="clientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker"></a>

```java
public java.lang.String getClientBroker();
```

- *Type:* java.lang.String

---

##### `inCluster`<sup>Required</sup> <a name="inCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster"></a>

```java
public java.lang.Object getInCluster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue"></a>

```java
public MskClusterEncryptionInfoEncryptionInTransit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---


### MskClusterEncryptionInfoOutputReference <a name="MskClusterEncryptionInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterEncryptionInfoOutputReference;

new MskClusterEncryptionInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit">putEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRestKmsKeyArn">resetEncryptionAtRestKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit">resetEncryptionInTransit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionInTransit` <a name="putEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit"></a>

```java
public void putEncryptionInTransit(MskClusterEncryptionInfoEncryptionInTransit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `resetEncryptionAtRestKmsKeyArn` <a name="resetEncryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRestKmsKeyArn"></a>

```java
public void resetEncryptionAtRestKmsKeyArn()
```

##### `resetEncryptionInTransit` <a name="resetEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit"></a>

```java
public void resetEncryptionInTransit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit">encryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArnInput">encryptionAtRestKmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput">encryptionInTransitInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArn">encryptionAtRestKmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionInTransit`<sup>Required</sup> <a name="encryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit"></a>

```java
public MskClusterEncryptionInfoEncryptionInTransitOutputReference getEncryptionInTransit();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a>

---

##### `encryptionAtRestKmsKeyArnInput`<sup>Optional</sup> <a name="encryptionAtRestKmsKeyArnInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArnInput"></a>

```java
public java.lang.String getEncryptionAtRestKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionInTransitInput`<sup>Optional</sup> <a name="encryptionInTransitInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput"></a>

```java
public MskClusterEncryptionInfoEncryptionInTransit getEncryptionInTransitInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `encryptionAtRestKmsKeyArn`<sup>Required</sup> <a name="encryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArn"></a>

```java
public java.lang.String getEncryptionAtRestKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue"></a>

```java
public MskClusterEncryptionInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---


### MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference;

new MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public MskClusterLoggingInfoBrokerLogsCloudwatchLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---


### MskClusterLoggingInfoBrokerLogsFirehoseOutputReference <a name="MskClusterLoggingInfoBrokerLogsFirehoseOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference;

new MskClusterLoggingInfoBrokerLogsFirehoseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream"></a>

```java
public void resetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput"></a>

```java
public java.lang.String getDeliveryStreamInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue"></a>

```java
public MskClusterLoggingInfoBrokerLogsFirehose getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---


### MskClusterLoggingInfoBrokerLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoBrokerLogsOutputReference;

new MskClusterLoggingInfoBrokerLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(MskClusterLoggingInfoBrokerLogsCloudwatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose"></a>

```java
public void putFirehose(MskClusterLoggingInfoBrokerLogsFirehose value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3"></a>

```java
public void putS3(MskClusterLoggingInfoBrokerLogsS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose"></a>

```java
public void resetFirehose()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput">firehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs"></a>

```java
public MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose"></a>

```java
public MskClusterLoggingInfoBrokerLogsFirehoseOutputReference getFirehose();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3"></a>

```java
public MskClusterLoggingInfoBrokerLogsS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput"></a>

```java
public MskClusterLoggingInfoBrokerLogsCloudwatchLogs getCloudwatchLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput"></a>

```java
public MskClusterLoggingInfoBrokerLogsFirehose getFirehoseInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input"></a>

```java
public MskClusterLoggingInfoBrokerLogsS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue"></a>

```java
public MskClusterLoggingInfoBrokerLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---


### MskClusterLoggingInfoBrokerLogsS3OutputReference <a name="MskClusterLoggingInfoBrokerLogsS3OutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoBrokerLogsS3OutputReference;

new MskClusterLoggingInfoBrokerLogsS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue"></a>

```java
public MskClusterLoggingInfoBrokerLogsS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---


### MskClusterLoggingInfoOutputReference <a name="MskClusterLoggingInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterLoggingInfoOutputReference;

new MskClusterLoggingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs">putBrokerLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBrokerLogs` <a name="putBrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs"></a>

```java
public void putBrokerLogs(MskClusterLoggingInfoBrokerLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs">brokerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput">brokerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `brokerLogs`<sup>Required</sup> <a name="brokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs"></a>

```java
public MskClusterLoggingInfoBrokerLogsOutputReference getBrokerLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a>

---

##### `brokerLogsInput`<sup>Optional</sup> <a name="brokerLogsInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput"></a>

```java
public MskClusterLoggingInfoBrokerLogs getBrokerLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue"></a>

```java
public MskClusterLoggingInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---


### MskClusterOpenMonitoringOutputReference <a name="MskClusterOpenMonitoringOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterOpenMonitoringOutputReference;

new MskClusterOpenMonitoringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus">putPrometheus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrometheus` <a name="putPrometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus"></a>

```java
public void putPrometheus(MskClusterOpenMonitoringPrometheus value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput">prometheusInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus"></a>

```java
public MskClusterOpenMonitoringPrometheusOutputReference getPrometheus();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a>

---

##### `prometheusInput`<sup>Optional</sup> <a name="prometheusInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput"></a>

```java
public MskClusterOpenMonitoringPrometheus getPrometheusInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue"></a>

```java
public MskClusterOpenMonitoring getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---


### MskClusterOpenMonitoringPrometheusJmxExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusJmxExporterOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference;

new MskClusterOpenMonitoringPrometheusJmxExporterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput">enabledInBrokerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker">enabledInBroker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInBrokerInput`<sup>Optional</sup> <a name="enabledInBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput"></a>

```java
public java.lang.Object getEnabledInBrokerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInBroker`<sup>Required</sup> <a name="enabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker"></a>

```java
public java.lang.Object getEnabledInBroker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue"></a>

```java
public MskClusterOpenMonitoringPrometheusJmxExporter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---


### MskClusterOpenMonitoringPrometheusNodeExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusNodeExporterOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference;

new MskClusterOpenMonitoringPrometheusNodeExporterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput">enabledInBrokerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker">enabledInBroker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInBrokerInput`<sup>Optional</sup> <a name="enabledInBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput"></a>

```java
public java.lang.Object getEnabledInBrokerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInBroker`<sup>Required</sup> <a name="enabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker"></a>

```java
public java.lang.Object getEnabledInBroker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue"></a>

```java
public MskClusterOpenMonitoringPrometheusNodeExporter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---


### MskClusterOpenMonitoringPrometheusOutputReference <a name="MskClusterOpenMonitoringPrometheusOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterOpenMonitoringPrometheusOutputReference;

new MskClusterOpenMonitoringPrometheusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter">putJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter">putNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter">resetJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter">resetNodeExporter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJmxExporter` <a name="putJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter"></a>

```java
public void putJmxExporter(MskClusterOpenMonitoringPrometheusJmxExporter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `putNodeExporter` <a name="putNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter"></a>

```java
public void putNodeExporter(MskClusterOpenMonitoringPrometheusNodeExporter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `resetJmxExporter` <a name="resetJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter"></a>

```java
public void resetJmxExporter()
```

##### `resetNodeExporter` <a name="resetNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter"></a>

```java
public void resetNodeExporter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter">jmxExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter">nodeExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput">jmxExporterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput">nodeExporterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jmxExporter`<sup>Required</sup> <a name="jmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter"></a>

```java
public MskClusterOpenMonitoringPrometheusJmxExporterOutputReference getJmxExporter();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a>

---

##### `nodeExporter`<sup>Required</sup> <a name="nodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter"></a>

```java
public MskClusterOpenMonitoringPrometheusNodeExporterOutputReference getNodeExporter();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a>

---

##### `jmxExporterInput`<sup>Optional</sup> <a name="jmxExporterInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput"></a>

```java
public MskClusterOpenMonitoringPrometheusJmxExporter getJmxExporterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `nodeExporterInput`<sup>Optional</sup> <a name="nodeExporterInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput"></a>

```java
public MskClusterOpenMonitoringPrometheusNodeExporter getNodeExporterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue"></a>

```java
public MskClusterOpenMonitoringPrometheus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---


### MskClusterTimeoutsOutputReference <a name="MskClusterTimeoutsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_cluster.MskClusterTimeoutsOutputReference;

new MskClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



