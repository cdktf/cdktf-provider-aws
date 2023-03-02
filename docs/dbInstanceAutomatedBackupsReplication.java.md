# `dbInstanceAutomatedBackupsReplication` Submodule <a name="`dbInstanceAutomatedBackupsReplication` Submodule" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstanceAutomatedBackupsReplication <a name="DbInstanceAutomatedBackupsReplication" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication aws_db_instance_automated_backups_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance_automated_backups_replication.DbInstanceAutomatedBackupsReplication;

DbInstanceAutomatedBackupsReplication.Builder.create(Construct scope, java.lang.String id)
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
    .sourceDbInstanceArn(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .preSignedUrl(java.lang.String)
//  .retentionPeriod(java.lang.Number)
//  .timeouts(DbInstanceAutomatedBackupsReplicationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.sourceDbInstanceArn">sourceDbInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.preSignedUrl">preSignedUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sourceDbInstanceArn`<sup>Required</sup> <a name="sourceDbInstanceArn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.sourceDbInstanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}.

---

##### `preSignedUrl`<sup>Optional</sup> <a name="preSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.preSignedUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.retentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#timeouts DbInstanceAutomatedBackupsReplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetPreSignedUrl">resetPreSignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts"></a>

```java
public void putTimeouts(DbInstanceAutomatedBackupsReplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPreSignedUrl` <a name="resetPreSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetPreSignedUrl"></a>

```java
public void resetPreSignedUrl()
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetRetentionPeriod"></a>

```java
public void resetRetentionPeriod()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance_automated_backups_replication.DbInstanceAutomatedBackupsReplication;

DbInstanceAutomatedBackupsReplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance_automated_backups_replication.DbInstanceAutomatedBackupsReplication;

DbInstanceAutomatedBackupsReplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance_automated_backups_replication.DbInstanceAutomatedBackupsReplication;

DbInstanceAutomatedBackupsReplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference">DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrlInput">preSignedUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArnInput">sourceDbInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrl">preSignedUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArn">sourceDbInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeouts"></a>

```java
public DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference">DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `preSignedUrlInput`<sup>Optional</sup> <a name="preSignedUrlInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrlInput"></a>

```java
public java.lang.String getPreSignedUrlInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriodInput"></a>

```java
public java.lang.Number getRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `sourceDbInstanceArnInput`<sup>Optional</sup> <a name="sourceDbInstanceArnInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArnInput"></a>

```java
public java.lang.String getSourceDbInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `preSignedUrl`<sup>Required</sup> <a name="preSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrl"></a>

```java
public java.lang.String getPreSignedUrl();
```

- *Type:* java.lang.String

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `sourceDbInstanceArn`<sup>Required</sup> <a name="sourceDbInstanceArn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArn"></a>

```java
public java.lang.String getSourceDbInstanceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceAutomatedBackupsReplicationConfig <a name="DbInstanceAutomatedBackupsReplicationConfig" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance_automated_backups_replication.DbInstanceAutomatedBackupsReplicationConfig;

DbInstanceAutomatedBackupsReplicationConfig.builder()
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
    .sourceDbInstanceArn(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .preSignedUrl(java.lang.String)
//  .retentionPeriod(java.lang.Number)
//  .timeouts(DbInstanceAutomatedBackupsReplicationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.sourceDbInstanceArn">sourceDbInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.preSignedUrl">preSignedUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sourceDbInstanceArn`<sup>Required</sup> <a name="sourceDbInstanceArn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.sourceDbInstanceArn"></a>

```java
public java.lang.String getSourceDbInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}.

---

##### `preSignedUrl`<sup>Optional</sup> <a name="preSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.preSignedUrl"></a>

```java
public java.lang.String getPreSignedUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.timeouts"></a>

```java
public DbInstanceAutomatedBackupsReplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#timeouts DbInstanceAutomatedBackupsReplication#timeouts}

---

### DbInstanceAutomatedBackupsReplicationTimeouts <a name="DbInstanceAutomatedBackupsReplicationTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance_automated_backups_replication.DbInstanceAutomatedBackupsReplicationTimeouts;

DbInstanceAutomatedBackupsReplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference <a name="DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance_automated_backups_replication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference;

new DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



