# `mskconnectConnector` Submodule <a name="`mskconnectConnector` Submodule" id="@cdktf/provider-aws.mskconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskconnectConnector <a name="MskconnectConnector" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector aws_mskconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnector;

MskconnectConnector.Builder.create(Construct scope, java.lang.String id)
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
    .capacity(MskconnectConnectorCapacity)
    .connectorConfiguration(java.util.Map<java.lang.String, java.lang.String>)
    .kafkaCluster(MskconnectConnectorKafkaCluster)
    .kafkaClusterClientAuthentication(MskconnectConnectorKafkaClusterClientAuthentication)
    .kafkaClusterEncryptionInTransit(MskconnectConnectorKafkaClusterEncryptionInTransit)
    .kafkaconnectVersion(java.lang.String)
    .name(java.lang.String)
    .plugin(IResolvable)
    .plugin(java.util.List<MskconnectConnectorPlugin>)
    .serviceExecutionRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .logDelivery(MskconnectConnectorLogDelivery)
//  .timeouts(MskconnectConnectorTimeouts)
//  .workerConfiguration(MskconnectConnectorWorkerConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.connectorConfiguration">connectorConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | kafka_cluster block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | kafka_cluster_client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | kafka_cluster_encryption_in_transit block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.kafkaconnectVersion">kafkaconnectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.plugin">plugin</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>></code> | plugin block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.logDelivery">logDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | log_delivery block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | worker_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.capacity"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#capacity MskconnectConnector#capacity}

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.connectorConfiguration"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}.

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.kafkaCluster"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster MskconnectConnector#kafka_cluster}

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.kafkaClusterClientAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

kafka_cluster_client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_client_authentication MskconnectConnector#kafka_cluster_client_authentication}

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.kafkaClusterEncryptionInTransit"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

kafka_cluster_encryption_in_transit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_encryption_in_transit MskconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `kafkaconnectVersion`<sup>Required</sup> <a name="kafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.kafkaconnectVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}.

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.plugin"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>>

plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#plugin MskconnectConnector#plugin}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.serviceExecutionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.logDelivery"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_delivery MskconnectConnector#log_delivery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#timeouts MskconnectConnector#timeouts}

---

##### `workerConfiguration`<sup>Optional</sup> <a name="workerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.workerConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_configuration MskconnectConnector#worker_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster">putKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication">putKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit">putKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery">putLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin">putPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration">putWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetLogDelivery">resetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetWorkerConfiguration">resetWorkerConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapacity` <a name="putCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity"></a>

```java
public void putCapacity(MskconnectConnectorCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---

##### `putKafkaCluster` <a name="putKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster"></a>

```java
public void putKafkaCluster(MskconnectConnectorKafkaCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---

##### `putKafkaClusterClientAuthentication` <a name="putKafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication"></a>

```java
public void putKafkaClusterClientAuthentication(MskconnectConnectorKafkaClusterClientAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `putKafkaClusterEncryptionInTransit` <a name="putKafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```java
public void putKafkaClusterEncryptionInTransit(MskconnectConnectorKafkaClusterEncryptionInTransit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `putLogDelivery` <a name="putLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery"></a>

```java
public void putLogDelivery(MskconnectConnectorLogDelivery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---

##### `putPlugin` <a name="putPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin"></a>

```java
public void putPlugin(IResolvable OR java.util.List<MskconnectConnectorPlugin> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts"></a>

```java
public void putTimeouts(MskconnectConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

---

##### `putWorkerConfiguration` <a name="putWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration"></a>

```java
public void putWorkerConfiguration(MskconnectConnectorWorkerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetId"></a>

```java
public void resetId()
```

##### `resetLogDelivery` <a name="resetLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetLogDelivery"></a>

```java
public void resetLogDelivery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkerConfiguration` <a name="resetWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetWorkerConfiguration"></a>

```java
public void resetWorkerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnector;

MskconnectConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnector;

MskconnectConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnector;

MskconnectConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference">MskconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference">MskconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference">MskconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference">MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference">MskconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.plugin">plugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList">MskconnectConnectorPluginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference">MskconnectConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference">MskconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacityInput">capacityInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfigurationInput">connectorConfigurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthenticationInput">kafkaClusterClientAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransitInput">kafkaClusterEncryptionInTransitInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterInput">kafkaClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersionInput">kafkaconnectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDeliveryInput">logDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.pluginInput">pluginInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfigurationInput">workerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfiguration">connectorConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersion">kafkaconnectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacity"></a>

```java
public MskconnectConnectorCapacityOutputReference getCapacity();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference">MskconnectConnectorCapacityOutputReference</a>

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaCluster"></a>

```java
public MskconnectConnectorKafkaClusterOutputReference getKafkaCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference">MskconnectConnectorKafkaClusterOutputReference</a>

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthentication"></a>

```java
public MskconnectConnectorKafkaClusterClientAuthenticationOutputReference getKafkaClusterClientAuthentication();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference">MskconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```java
public MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference getKafkaClusterEncryptionInTransit();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference">MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `logDelivery`<sup>Required</sup> <a name="logDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDelivery"></a>

```java
public MskconnectConnectorLogDeliveryOutputReference getLogDelivery();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference">MskconnectConnectorLogDeliveryOutputReference</a>

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.plugin"></a>

```java
public MskconnectConnectorPluginList getPlugin();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList">MskconnectConnectorPluginList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeouts"></a>

```java
public MskconnectConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference">MskconnectConnectorTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `workerConfiguration`<sup>Required</sup> <a name="workerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfiguration"></a>

```java
public MskconnectConnectorWorkerConfigurationOutputReference getWorkerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference">MskconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacityInput"></a>

```java
public MskconnectConnectorCapacity getCapacityInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---

##### `connectorConfigurationInput`<sup>Optional</sup> <a name="connectorConfigurationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfigurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectorConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kafkaClusterClientAuthenticationInput`<sup>Optional</sup> <a name="kafkaClusterClientAuthenticationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```java
public MskconnectConnectorKafkaClusterClientAuthentication getKafkaClusterClientAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `kafkaClusterEncryptionInTransitInput`<sup>Optional</sup> <a name="kafkaClusterEncryptionInTransitInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```java
public MskconnectConnectorKafkaClusterEncryptionInTransit getKafkaClusterEncryptionInTransitInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `kafkaClusterInput`<sup>Optional</sup> <a name="kafkaClusterInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterInput"></a>

```java
public MskconnectConnectorKafkaCluster getKafkaClusterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---

##### `kafkaconnectVersionInput`<sup>Optional</sup> <a name="kafkaconnectVersionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersionInput"></a>

```java
public java.lang.String getKafkaconnectVersionInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryInput`<sup>Optional</sup> <a name="logDeliveryInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDeliveryInput"></a>

```java
public MskconnectConnectorLogDelivery getLogDeliveryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pluginInput`<sup>Optional</sup> <a name="pluginInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.pluginInput"></a>

```java
public java.lang.Object getPluginInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>>

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArnInput"></a>

```java
public java.lang.String getServiceExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `workerConfigurationInput`<sup>Optional</sup> <a name="workerConfigurationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfigurationInput"></a>

```java
public MskconnectConnectorWorkerConfiguration getWorkerConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfiguration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectorConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kafkaconnectVersion`<sup>Required</sup> <a name="kafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersion"></a>

```java
public java.lang.String getKafkaconnectVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MskconnectConnectorCapacity <a name="MskconnectConnectorCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacity;

MskconnectConnectorCapacity.builder()
//  .autoscaling(MskconnectConnectorCapacityAutoscaling)
//  .provisionedCapacity(MskconnectConnectorCapacityProvisionedCapacity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | provisioned_capacity block. |

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.autoscaling"></a>

```java
public MskconnectConnectorCapacityAutoscaling getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#autoscaling MskconnectConnector#autoscaling}

---

##### `provisionedCapacity`<sup>Optional</sup> <a name="provisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.provisionedCapacity"></a>

```java
public MskconnectConnectorCapacityProvisionedCapacity getProvisionedCapacity();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

provisioned_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#provisioned_capacity MskconnectConnector#provisioned_capacity}

---

### MskconnectConnectorCapacityAutoscaling <a name="MskconnectConnectorCapacityAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityAutoscaling;

MskconnectConnectorCapacityAutoscaling.builder()
    .maxWorkerCount(java.lang.Number)
    .minWorkerCount(java.lang.Number)
//  .mcuCount(java.lang.Number)
//  .scaleInPolicy(MskconnectConnectorCapacityAutoscalingScaleInPolicy)
//  .scaleOutPolicy(MskconnectConnectorCapacityAutoscalingScaleOutPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.maxWorkerCount">maxWorkerCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.minWorkerCount">minWorkerCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.mcuCount">mcuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | scale_in_policy block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | scale_out_policy block. |

---

##### `maxWorkerCount`<sup>Required</sup> <a name="maxWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.maxWorkerCount"></a>

```java
public java.lang.Number getMaxWorkerCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}.

---

##### `minWorkerCount`<sup>Required</sup> <a name="minWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.minWorkerCount"></a>

```java
public java.lang.Number getMinWorkerCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}.

---

##### `mcuCount`<sup>Optional</sup> <a name="mcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.mcuCount"></a>

```java
public java.lang.Number getMcuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}.

---

##### `scaleInPolicy`<sup>Optional</sup> <a name="scaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleInPolicy"></a>

```java
public MskconnectConnectorCapacityAutoscalingScaleInPolicy getScaleInPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

scale_in_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_in_policy MskconnectConnector#scale_in_policy}

---

##### `scaleOutPolicy`<sup>Optional</sup> <a name="scaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleOutPolicy"></a>

```java
public MskconnectConnectorCapacityAutoscalingScaleOutPolicy getScaleOutPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

scale_out_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_out_policy MskconnectConnector#scale_out_policy}

---

### MskconnectConnectorCapacityAutoscalingScaleInPolicy <a name="MskconnectConnectorCapacityAutoscalingScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityAutoscalingScaleInPolicy;

MskconnectConnectorCapacityAutoscalingScaleInPolicy.builder()
//  .cpuUtilizationPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}. |

---

##### `cpuUtilizationPercentage`<sup>Optional</sup> <a name="cpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```java
public java.lang.Number getCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}.

---

### MskconnectConnectorCapacityAutoscalingScaleOutPolicy <a name="MskconnectConnectorCapacityAutoscalingScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy;

MskconnectConnectorCapacityAutoscalingScaleOutPolicy.builder()
//  .cpuUtilizationPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}. |

---

##### `cpuUtilizationPercentage`<sup>Optional</sup> <a name="cpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```java
public java.lang.Number getCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}.

---

### MskconnectConnectorCapacityProvisionedCapacity <a name="MskconnectConnectorCapacityProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityProvisionedCapacity;

MskconnectConnectorCapacityProvisionedCapacity.builder()
    .workerCount(java.lang.Number)
//  .mcuCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.mcuCount">mcuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}. |

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}.

---

##### `mcuCount`<sup>Optional</sup> <a name="mcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```java
public java.lang.Number getMcuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}.

---

### MskconnectConnectorConfig <a name="MskconnectConnectorConfig" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorConfig;

MskconnectConnectorConfig.builder()
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
    .capacity(MskconnectConnectorCapacity)
    .connectorConfiguration(java.util.Map<java.lang.String, java.lang.String>)
    .kafkaCluster(MskconnectConnectorKafkaCluster)
    .kafkaClusterClientAuthentication(MskconnectConnectorKafkaClusterClientAuthentication)
    .kafkaClusterEncryptionInTransit(MskconnectConnectorKafkaClusterEncryptionInTransit)
    .kafkaconnectVersion(java.lang.String)
    .name(java.lang.String)
    .plugin(IResolvable)
    .plugin(java.util.List<MskconnectConnectorPlugin>)
    .serviceExecutionRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .logDelivery(MskconnectConnectorLogDelivery)
//  .timeouts(MskconnectConnectorTimeouts)
//  .workerConfiguration(MskconnectConnectorWorkerConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connectorConfiguration">connectorConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | kafka_cluster block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | kafka_cluster_client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | kafka_cluster_encryption_in_transit block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaconnectVersion">kafkaconnectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.plugin">plugin</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>></code> | plugin block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | log_delivery block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | worker_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.capacity"></a>

```java
public MskconnectConnectorCapacity getCapacity();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#capacity MskconnectConnector#capacity}

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connectorConfiguration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectorConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}.

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaCluster"></a>

```java
public MskconnectConnectorKafkaCluster getKafkaCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster MskconnectConnector#kafka_cluster}

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```java
public MskconnectConnectorKafkaClusterClientAuthentication getKafkaClusterClientAuthentication();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

kafka_cluster_client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_client_authentication MskconnectConnector#kafka_cluster_client_authentication}

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```java
public MskconnectConnectorKafkaClusterEncryptionInTransit getKafkaClusterEncryptionInTransit();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

kafka_cluster_encryption_in_transit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_encryption_in_transit MskconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `kafkaconnectVersion`<sup>Required</sup> <a name="kafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaconnectVersion"></a>

```java
public java.lang.String getKafkaconnectVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}.

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.plugin"></a>

```java
public java.lang.Object getPlugin();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>>

plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#plugin MskconnectConnector#plugin}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.logDelivery"></a>

```java
public MskconnectConnectorLogDelivery getLogDelivery();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_delivery MskconnectConnector#log_delivery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.timeouts"></a>

```java
public MskconnectConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#timeouts MskconnectConnector#timeouts}

---

##### `workerConfiguration`<sup>Optional</sup> <a name="workerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.workerConfiguration"></a>

```java
public MskconnectConnectorWorkerConfiguration getWorkerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_configuration MskconnectConnector#worker_configuration}

---

### MskconnectConnectorKafkaCluster <a name="MskconnectConnectorKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaCluster;

MskconnectConnectorKafkaCluster.builder()
    .apacheKafkaCluster(MskconnectConnectorKafkaClusterApacheKafkaCluster)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | apache_kafka_cluster block. |

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```java
public MskconnectConnectorKafkaClusterApacheKafkaCluster getApacheKafkaCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

apache_kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#apache_kafka_cluster MskconnectConnector#apache_kafka_cluster}

---

### MskconnectConnectorKafkaClusterApacheKafkaCluster <a name="MskconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterApacheKafkaCluster;

MskconnectConnectorKafkaClusterApacheKafkaCluster.builder()
    .bootstrapServers(java.lang.String)
    .vpc(MskconnectConnectorKafkaClusterApacheKafkaClusterVpc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | vpc block. |

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```java
public MskconnectConnectorKafkaClusterApacheKafkaClusterVpc getVpc();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#vpc MskconnectConnector#vpc}

---

### MskconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc;

MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.builder()
    .securityGroups(java.util.List<java.lang.String>)
    .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}. |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}.

---

### MskconnectConnectorKafkaClusterClientAuthentication <a name="MskconnectConnectorKafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterClientAuthentication;

MskconnectConnectorKafkaClusterClientAuthentication.builder()
//  .authenticationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}. |

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}.

---

### MskconnectConnectorKafkaClusterEncryptionInTransit <a name="MskconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterEncryptionInTransit;

MskconnectConnectorKafkaClusterEncryptionInTransit.builder()
//  .encryptionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}.

---

### MskconnectConnectorLogDelivery <a name="MskconnectConnectorLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDelivery;

MskconnectConnectorLogDelivery.builder()
    .workerLogDelivery(MskconnectConnectorLogDeliveryWorkerLogDelivery)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | worker_log_delivery block. |

---

##### `workerLogDelivery`<sup>Required</sup> <a name="workerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDelivery getWorkerLogDelivery();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

worker_log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_log_delivery MskconnectConnector#worker_log_delivery}

---

### MskconnectConnectorLogDeliveryWorkerLogDelivery <a name="MskconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryWorkerLogDelivery;

MskconnectConnectorLogDeliveryWorkerLogDelivery.builder()
//  .cloudwatchLogs(MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs)
//  .firehose(MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose)
//  .s3(MskconnectConnectorLogDeliveryWorkerLogDeliveryS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | s3 block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs getCloudwatchLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cloudwatch_logs MskconnectConnector#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose getFirehose();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#firehose MskconnectConnector#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#s3 MskconnectConnector#s3}

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;

MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .logGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}.

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;

MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .deliveryStream(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}.

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3;

MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}.

---

### MskconnectConnectorPlugin <a name="MskconnectConnectorPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorPlugin;

MskconnectConnectorPlugin.builder()
    .customPlugin(MskconnectConnectorPluginCustomPlugin)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | custom_plugin block. |

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.property.customPlugin"></a>

```java
public MskconnectConnectorPluginCustomPlugin getCustomPlugin();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

custom_plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#custom_plugin MskconnectConnector#custom_plugin}

---

### MskconnectConnectorPluginCustomPlugin <a name="MskconnectConnectorPluginCustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorPluginCustomPlugin;

MskconnectConnectorPluginCustomPlugin.builder()
    .arn(java.lang.String)
    .revision(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.revision">revision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}.

---

### MskconnectConnectorTimeouts <a name="MskconnectConnectorTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorTimeouts;

MskconnectConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}.

---

### MskconnectConnectorWorkerConfiguration <a name="MskconnectConnectorWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorWorkerConfiguration;

MskconnectConnectorWorkerConfiguration.builder()
    .arn(java.lang.String)
    .revision(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.revision">revision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskconnectConnectorCapacityAutoscalingOutputReference <a name="MskconnectConnectorCapacityAutoscalingOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityAutoscalingOutputReference;

new MskconnectConnectorCapacityAutoscalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy">putScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy">putScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetMcuCount">resetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleInPolicy">resetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleOutPolicy">resetScaleOutPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaleInPolicy` <a name="putScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy"></a>

```java
public void putScaleInPolicy(MskconnectConnectorCapacityAutoscalingScaleInPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---

##### `putScaleOutPolicy` <a name="putScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy"></a>

```java
public void putScaleOutPolicy(MskconnectConnectorCapacityAutoscalingScaleOutPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---

##### `resetMcuCount` <a name="resetMcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetMcuCount"></a>

```java
public void resetMcuCount()
```

##### `resetScaleInPolicy` <a name="resetScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleInPolicy"></a>

```java
public void resetScaleInPolicy()
```

##### `resetScaleOutPolicy` <a name="resetScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleOutPolicy"></a>

```java
public void resetScaleOutPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCountInput">maxWorkerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCountInput">mcuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCountInput">minWorkerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicyInput">scaleInPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicyInput">scaleOutPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCount">maxWorkerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCount">mcuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCount">minWorkerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleInPolicy`<sup>Required</sup> <a name="scaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicy"></a>

```java
public MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference getScaleInPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference</a>

---

##### `scaleOutPolicy`<sup>Required</sup> <a name="scaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicy"></a>

```java
public MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference getScaleOutPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference</a>

---

##### `maxWorkerCountInput`<sup>Optional</sup> <a name="maxWorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCountInput"></a>

```java
public java.lang.Number getMaxWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `mcuCountInput`<sup>Optional</sup> <a name="mcuCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCountInput"></a>

```java
public java.lang.Number getMcuCountInput();
```

- *Type:* java.lang.Number

---

##### `minWorkerCountInput`<sup>Optional</sup> <a name="minWorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCountInput"></a>

```java
public java.lang.Number getMinWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `scaleInPolicyInput`<sup>Optional</sup> <a name="scaleInPolicyInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicyInput"></a>

```java
public MskconnectConnectorCapacityAutoscalingScaleInPolicy getScaleInPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---

##### `scaleOutPolicyInput`<sup>Optional</sup> <a name="scaleOutPolicyInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicyInput"></a>

```java
public MskconnectConnectorCapacityAutoscalingScaleOutPolicy getScaleOutPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---

##### `maxWorkerCount`<sup>Required</sup> <a name="maxWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCount"></a>

```java
public java.lang.Number getMaxWorkerCount();
```

- *Type:* java.lang.Number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCount"></a>

```java
public java.lang.Number getMcuCount();
```

- *Type:* java.lang.Number

---

##### `minWorkerCount`<sup>Required</sup> <a name="minWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCount"></a>

```java
public java.lang.Number getMinWorkerCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorCapacityAutoscaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---


### MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference <a name="MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference;

new MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">resetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationPercentage` <a name="resetCpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```java
public void resetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">cpuUtilizationPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuUtilizationPercentageInput`<sup>Optional</sup> <a name="cpuUtilizationPercentageInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```java
public java.lang.Number getCpuUtilizationPercentageInput();
```

- *Type:* java.lang.Number

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```java
public java.lang.Number getCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorCapacityAutoscalingScaleInPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---


### MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference <a name="MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference;

new MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">resetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationPercentage` <a name="resetCpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```java
public void resetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">cpuUtilizationPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuUtilizationPercentageInput`<sup>Optional</sup> <a name="cpuUtilizationPercentageInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```java
public java.lang.Number getCpuUtilizationPercentageInput();
```

- *Type:* java.lang.Number

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```java
public java.lang.Number getCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorCapacityAutoscalingScaleOutPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---


### MskconnectConnectorCapacityOutputReference <a name="MskconnectConnectorCapacityOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityOutputReference;

new MskconnectConnectorCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity">putProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetAutoscaling">resetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetProvisionedCapacity">resetProvisionedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling"></a>

```java
public void putAutoscaling(MskconnectConnectorCapacityAutoscaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---

##### `putProvisionedCapacity` <a name="putProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```java
public void putProvisionedCapacity(MskconnectConnectorCapacityProvisionedCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---

##### `resetAutoscaling` <a name="resetAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetAutoscaling"></a>

```java
public void resetAutoscaling()
```

##### `resetProvisionedCapacity` <a name="resetProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```java
public void resetProvisionedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference">MskconnectConnectorCapacityAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference">MskconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">provisionedCapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscaling"></a>

```java
public MskconnectConnectorCapacityAutoscalingOutputReference getAutoscaling();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference">MskconnectConnectorCapacityAutoscalingOutputReference</a>

---

##### `provisionedCapacity`<sup>Required</sup> <a name="provisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```java
public MskconnectConnectorCapacityProvisionedCapacityOutputReference getProvisionedCapacity();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference">MskconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscalingInput"></a>

```java
public MskconnectConnectorCapacityAutoscaling getAutoscalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---

##### `provisionedCapacityInput`<sup>Optional</sup> <a name="provisionedCapacityInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```java
public MskconnectConnectorCapacityProvisionedCapacity getProvisionedCapacityInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorCapacity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---


### MskconnectConnectorCapacityProvisionedCapacityOutputReference <a name="MskconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorCapacityProvisionedCapacityOutputReference;

new MskconnectConnectorCapacityProvisionedCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">resetMcuCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMcuCount` <a name="resetMcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```java
public void resetMcuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">mcuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">mcuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mcuCountInput`<sup>Optional</sup> <a name="mcuCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```java
public java.lang.Number getMcuCountInput();
```

- *Type:* java.lang.Number

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```java
public java.lang.Number getWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```java
public java.lang.Number getMcuCount();
```

- *Type:* java.lang.Number

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorCapacityProvisionedCapacity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---


### MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference;

new MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">putVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpc` <a name="putVpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```java
public void putVpc(MskconnectConnectorKafkaClusterApacheKafkaClusterVpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">vpcInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```java
public MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference getVpc();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```java
public java.lang.String getBootstrapServersInput();
```

- *Type:* java.lang.String

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```java
public MskconnectConnectorKafkaClusterApacheKafkaClusterVpc getVpcInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorKafkaClusterApacheKafkaCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference;

new MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorKafkaClusterApacheKafkaClusterVpc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### MskconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="MskconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference;

new MskconnectConnectorKafkaClusterClientAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorKafkaClusterClientAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---


### MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference;

new MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorKafkaClusterEncryptionInTransit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### MskconnectConnectorKafkaClusterOutputReference <a name="MskconnectConnectorKafkaClusterOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorKafkaClusterOutputReference;

new MskconnectConnectorKafkaClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">putApacheKafkaCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApacheKafkaCluster` <a name="putApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```java
public void putApacheKafkaCluster(MskconnectConnectorKafkaClusterApacheKafkaCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">apacheKafkaClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```java
public MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference getApacheKafkaCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `apacheKafkaClusterInput`<sup>Optional</sup> <a name="apacheKafkaClusterInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```java
public MskconnectConnectorKafkaClusterApacheKafkaCluster getApacheKafkaClusterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorKafkaCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---


### MskconnectConnectorLogDeliveryOutputReference <a name="MskconnectConnectorLogDeliveryOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryOutputReference;

new MskconnectConnectorLogDeliveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">putWorkerLogDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorkerLogDelivery` <a name="putWorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```java
public void putWorkerLogDelivery(MskconnectConnectorLogDeliveryWorkerLogDelivery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">workerLogDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workerLogDelivery`<sup>Required</sup> <a name="workerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference getWorkerLogDelivery();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `workerLogDeliveryInput`<sup>Optional</sup> <a name="workerLogDeliveryInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDelivery getWorkerLogDeliveryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorLogDelivery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```java
public void resetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```java
public java.lang.String getDeliveryStreamInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```java
public void putFirehose(MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```java
public void putS3(MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```java
public void resetFirehose()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">firehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference getFirehose();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs getCloudwatchLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose getFirehoseInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDelivery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```java
public MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### MskconnectConnectorPluginCustomPluginOutputReference <a name="MskconnectConnectorPluginCustomPluginOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorPluginCustomPluginOutputReference;

new MskconnectConnectorPluginCustomPluginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorPluginCustomPlugin getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---


### MskconnectConnectorPluginList <a name="MskconnectConnectorPluginList" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorPluginList;

new MskconnectConnectorPluginList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get"></a>

```java
public MskconnectConnectorPluginOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a>>

---


### MskconnectConnectorPluginOutputReference <a name="MskconnectConnectorPluginOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorPluginOutputReference;

new MskconnectConnectorPluginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin">putCustomPlugin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPlugin` <a name="putCustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin"></a>

```java
public void putCustomPlugin(MskconnectConnectorPluginCustomPlugin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference">MskconnectConnectorPluginCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPluginInput">customPluginInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPlugin"></a>

```java
public MskconnectConnectorPluginCustomPluginOutputReference getCustomPlugin();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference">MskconnectConnectorPluginCustomPluginOutputReference</a>

---

##### `customPluginInput`<sup>Optional</sup> <a name="customPluginInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPluginInput"></a>

```java
public MskconnectConnectorPluginCustomPlugin getCustomPluginInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin">MskconnectConnectorPlugin</a> OR com.hashicorp.cdktf.IResolvable

---


### MskconnectConnectorTimeoutsOutputReference <a name="MskconnectConnectorTimeoutsOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorTimeoutsOutputReference;

new MskconnectConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### MskconnectConnectorWorkerConfigurationOutputReference <a name="MskconnectConnectorWorkerConfigurationOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mskconnect_connector.MskconnectConnectorWorkerConfigurationOutputReference;

new MskconnectConnectorWorkerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```java
public MskconnectConnectorWorkerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---



