# `devopsguruServiceIntegration` Submodule <a name="`devopsguruServiceIntegration` Submodule" id="@cdktf/provider-aws.devopsguruServiceIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruServiceIntegration <a name="DevopsguruServiceIntegration" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegration;

DevopsguruServiceIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .kmsServerSideEncryption(IResolvable)
//  .kmsServerSideEncryption(java.util.List<DevopsguruServiceIntegrationKmsServerSideEncryption>)
//  .logsAnomalyDetection(IResolvable)
//  .logsAnomalyDetection(java.util.List<DevopsguruServiceIntegrationLogsAnomalyDetection>)
//  .opsCenter(IResolvable)
//  .opsCenter(java.util.List<DevopsguruServiceIntegrationOpsCenter>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.kmsServerSideEncryption">kmsServerSideEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>></code> | kms_server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.logsAnomalyDetection">logsAnomalyDetection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>></code> | logs_anomaly_detection block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.opsCenter">opsCenter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>></code> | ops_center block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kmsServerSideEncryption`<sup>Optional</sup> <a name="kmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.kmsServerSideEncryption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>>

kms_server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#kms_server_side_encryption DevopsguruServiceIntegration#kms_server_side_encryption}

---

##### `logsAnomalyDetection`<sup>Optional</sup> <a name="logsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.logsAnomalyDetection"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>>

logs_anomaly_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#logs_anomaly_detection DevopsguruServiceIntegration#logs_anomaly_detection}

---

##### `opsCenter`<sup>Optional</sup> <a name="opsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.opsCenter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>>

ops_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#ops_center DevopsguruServiceIntegration#ops_center}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption">putKmsServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection">putLogsAnomalyDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter">putOpsCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetKmsServerSideEncryption">resetKmsServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetLogsAnomalyDetection">resetLogsAnomalyDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOpsCenter">resetOpsCenter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKmsServerSideEncryption` <a name="putKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption"></a>

```java
public void putKmsServerSideEncryption(IResolvable OR java.util.List<DevopsguruServiceIntegrationKmsServerSideEncryption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>>

---

##### `putLogsAnomalyDetection` <a name="putLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection"></a>

```java
public void putLogsAnomalyDetection(IResolvable OR java.util.List<DevopsguruServiceIntegrationLogsAnomalyDetection> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>>

---

##### `putOpsCenter` <a name="putOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter"></a>

```java
public void putOpsCenter(IResolvable OR java.util.List<DevopsguruServiceIntegrationOpsCenter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>>

---

##### `resetKmsServerSideEncryption` <a name="resetKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetKmsServerSideEncryption"></a>

```java
public void resetKmsServerSideEncryption()
```

##### `resetLogsAnomalyDetection` <a name="resetLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetLogsAnomalyDetection"></a>

```java
public void resetLogsAnomalyDetection()
```

##### `resetOpsCenter` <a name="resetOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOpsCenter"></a>

```java
public void resetOpsCenter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsguruServiceIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegration;

DevopsguruServiceIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegration;

DevopsguruServiceIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegration;

DevopsguruServiceIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegration;

DevopsguruServiceIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsguruServiceIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevopsguruServiceIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsguruServiceIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsguruServiceIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevopsguruServiceIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryption">kmsServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList">DevopsguruServiceIntegrationKmsServerSideEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetection">logsAnomalyDetection</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList">DevopsguruServiceIntegrationLogsAnomalyDetectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenter">opsCenter</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList">DevopsguruServiceIntegrationOpsCenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryptionInput">kmsServerSideEncryptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetectionInput">logsAnomalyDetectionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenterInput">opsCenterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsServerSideEncryption`<sup>Required</sup> <a name="kmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryption"></a>

```java
public DevopsguruServiceIntegrationKmsServerSideEncryptionList getKmsServerSideEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList">DevopsguruServiceIntegrationKmsServerSideEncryptionList</a>

---

##### `logsAnomalyDetection`<sup>Required</sup> <a name="logsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetection"></a>

```java
public DevopsguruServiceIntegrationLogsAnomalyDetectionList getLogsAnomalyDetection();
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList">DevopsguruServiceIntegrationLogsAnomalyDetectionList</a>

---

##### `opsCenter`<sup>Required</sup> <a name="opsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenter"></a>

```java
public DevopsguruServiceIntegrationOpsCenterList getOpsCenter();
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList">DevopsguruServiceIntegrationOpsCenterList</a>

---

##### `kmsServerSideEncryptionInput`<sup>Optional</sup> <a name="kmsServerSideEncryptionInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryptionInput"></a>

```java
public java.lang.Object getKmsServerSideEncryptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>>

---

##### `logsAnomalyDetectionInput`<sup>Optional</sup> <a name="logsAnomalyDetectionInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetectionInput"></a>

```java
public java.lang.Object getLogsAnomalyDetectionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>>

---

##### `opsCenterInput`<sup>Optional</sup> <a name="opsCenterInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenterInput"></a>

```java
public java.lang.Object getOpsCenterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruServiceIntegrationConfig <a name="DevopsguruServiceIntegrationConfig" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationConfig;

DevopsguruServiceIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .kmsServerSideEncryption(IResolvable)
//  .kmsServerSideEncryption(java.util.List<DevopsguruServiceIntegrationKmsServerSideEncryption>)
//  .logsAnomalyDetection(IResolvable)
//  .logsAnomalyDetection(java.util.List<DevopsguruServiceIntegrationLogsAnomalyDetection>)
//  .opsCenter(IResolvable)
//  .opsCenter(java.util.List<DevopsguruServiceIntegrationOpsCenter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.kmsServerSideEncryption">kmsServerSideEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>></code> | kms_server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.logsAnomalyDetection">logsAnomalyDetection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>></code> | logs_anomaly_detection block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.opsCenter">opsCenter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>></code> | ops_center block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kmsServerSideEncryption`<sup>Optional</sup> <a name="kmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.kmsServerSideEncryption"></a>

```java
public java.lang.Object getKmsServerSideEncryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>>

kms_server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#kms_server_side_encryption DevopsguruServiceIntegration#kms_server_side_encryption}

---

##### `logsAnomalyDetection`<sup>Optional</sup> <a name="logsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.logsAnomalyDetection"></a>

```java
public java.lang.Object getLogsAnomalyDetection();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>>

logs_anomaly_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#logs_anomaly_detection DevopsguruServiceIntegration#logs_anomaly_detection}

---

##### `opsCenter`<sup>Optional</sup> <a name="opsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.opsCenter"></a>

```java
public java.lang.Object getOpsCenter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>>

ops_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#ops_center DevopsguruServiceIntegration#ops_center}

---

### DevopsguruServiceIntegrationKmsServerSideEncryption <a name="DevopsguruServiceIntegrationKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationKmsServerSideEncryption;

DevopsguruServiceIntegrationKmsServerSideEncryption.builder()
//  .kmsKeyId(java.lang.String)
//  .optInStatus(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#kms_key_id DevopsguruServiceIntegration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#type DevopsguruServiceIntegration#type}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#kms_key_id DevopsguruServiceIntegration#kms_key_id}.

---

##### `optInStatus`<sup>Optional</sup> <a name="optInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#type DevopsguruServiceIntegration#type}.

---

### DevopsguruServiceIntegrationLogsAnomalyDetection <a name="DevopsguruServiceIntegrationLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationLogsAnomalyDetection;

DevopsguruServiceIntegrationLogsAnomalyDetection.builder()
//  .optInStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |

---

##### `optInStatus`<sup>Optional</sup> <a name="optInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

### DevopsguruServiceIntegrationOpsCenter <a name="DevopsguruServiceIntegrationOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationOpsCenter;

DevopsguruServiceIntegrationOpsCenter.builder()
//  .optInStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |

---

##### `optInStatus`<sup>Optional</sup> <a name="optInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruServiceIntegrationKmsServerSideEncryptionList <a name="DevopsguruServiceIntegrationKmsServerSideEncryptionList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationKmsServerSideEncryptionList;

new DevopsguruServiceIntegrationKmsServerSideEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get"></a>

```java
public DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>>

---


### DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference <a name="DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference;

new DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetOptInStatus">resetOptInStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetOptInStatus` <a name="resetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetOptInStatus"></a>

```java
public void resetOptInStatus()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatusInput">optInStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `optInStatusInput`<sup>Optional</sup> <a name="optInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatusInput"></a>

```java
public java.lang.String getOptInStatusInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption">DevopsguruServiceIntegrationKmsServerSideEncryption</a>

---


### DevopsguruServiceIntegrationLogsAnomalyDetectionList <a name="DevopsguruServiceIntegrationLogsAnomalyDetectionList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationLogsAnomalyDetectionList;

new DevopsguruServiceIntegrationLogsAnomalyDetectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get"></a>

```java
public DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>>

---


### DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference <a name="DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference;

new DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resetOptInStatus">resetOptInStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptInStatus` <a name="resetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resetOptInStatus"></a>

```java
public void resetOptInStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatusInput">optInStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optInStatusInput`<sup>Optional</sup> <a name="optInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatusInput"></a>

```java
public java.lang.String getOptInStatusInput();
```

- *Type:* java.lang.String

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection">DevopsguruServiceIntegrationLogsAnomalyDetection</a>

---


### DevopsguruServiceIntegrationOpsCenterList <a name="DevopsguruServiceIntegrationOpsCenterList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationOpsCenterList;

new DevopsguruServiceIntegrationOpsCenterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get"></a>

```java
public DevopsguruServiceIntegrationOpsCenterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>>

---


### DevopsguruServiceIntegrationOpsCenterOutputReference <a name="DevopsguruServiceIntegrationOpsCenterOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devopsguru_service_integration.DevopsguruServiceIntegrationOpsCenterOutputReference;

new DevopsguruServiceIntegrationOpsCenterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resetOptInStatus">resetOptInStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptInStatus` <a name="resetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resetOptInStatus"></a>

```java
public void resetOptInStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatusInput">optInStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optInStatusInput`<sup>Optional</sup> <a name="optInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatusInput"></a>

```java
public java.lang.String getOptInStatusInput();
```

- *Type:* java.lang.String

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter">DevopsguruServiceIntegrationOpsCenter</a>

---



