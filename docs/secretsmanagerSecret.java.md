# `secretsmanagerSecret` Submodule <a name="`secretsmanagerSecret` Submodule" id="@cdktf/provider-aws.secretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecret <a name="SecretsmanagerSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret aws_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .forceOverwriteReplicaSecret(java.lang.Boolean)
//  .forceOverwriteReplicaSecret(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .policy(java.lang.String)
//  .recoveryWindowInDays(java.lang.Number)
//  .region(java.lang.String)
//  .replica(IResolvable)
//  .replica(java.util.List<SecretsmanagerSecretReplica>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forceOverwriteReplicaSecret">forceOverwriteReplicaSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#id SecretsmanagerSecret#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#policy SecretsmanagerSecret#policy}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.replica">replica</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>></code> | replica block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#tags SecretsmanagerSecret#tags}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}.

---

##### `forceOverwriteReplicaSecret`<sup>Optional</sup> <a name="forceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forceOverwriteReplicaSecret"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#id SecretsmanagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#policy SecretsmanagerSecret#policy}.

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.recoveryWindowInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.replica"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>>

replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#replica SecretsmanagerSecret#replica}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#tags SecretsmanagerSecret#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica">putReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetForceOverwriteReplicaSecret">resetForceOverwriteReplicaSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetReplica">resetReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplica` <a name="putReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica"></a>

```java
public void putReplica(IResolvable OR java.util.List<SecretsmanagerSecretReplica> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetForceOverwriteReplicaSecret` <a name="resetForceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetForceOverwriteReplicaSecret"></a>

```java
public void resetForceOverwriteReplicaSecret()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRecoveryWindowInDays"></a>

```java
public void resetRecoveryWindowInDays()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplica` <a name="resetReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetReplica"></a>

```java
public void resetReplica()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsmanagerSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecret;

SecretsmanagerSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsmanagerSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecretsmanagerSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsmanagerSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsmanagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList">SecretsmanagerSecretReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecretInput">forceOverwriteReplicaSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replicaInput">replicaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecret">forceOverwriteReplicaSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replica"></a>

```java
public SecretsmanagerSecretReplicaList getReplica();
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList">SecretsmanagerSecretReplicaList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forceOverwriteReplicaSecretInput`<sup>Optional</sup> <a name="forceOverwriteReplicaSecretInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecretInput"></a>

```java
public java.lang.Object getForceOverwriteReplicaSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDaysInput"></a>

```java
public java.lang.Number getRecoveryWindowInDaysInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicaInput`<sup>Optional</sup> <a name="replicaInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replicaInput"></a>

```java
public java.lang.Object getReplicaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forceOverwriteReplicaSecret`<sup>Required</sup> <a name="forceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecret"></a>

```java
public java.lang.Object getForceOverwriteReplicaSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretConfig <a name="SecretsmanagerSecretConfig" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecretConfig;

SecretsmanagerSecretConfig.builder()
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
//  .description(java.lang.String)
//  .forceOverwriteReplicaSecret(java.lang.Boolean)
//  .forceOverwriteReplicaSecret(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .policy(java.lang.String)
//  .recoveryWindowInDays(java.lang.Number)
//  .region(java.lang.String)
//  .replica(IResolvable)
//  .replica(java.util.List<SecretsmanagerSecretReplica>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forceOverwriteReplicaSecret">forceOverwriteReplicaSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#id SecretsmanagerSecret#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#policy SecretsmanagerSecret#policy}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replica">replica</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>></code> | replica block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#tags SecretsmanagerSecret#tags}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}.

---

##### `forceOverwriteReplicaSecret`<sup>Optional</sup> <a name="forceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forceOverwriteReplicaSecret"></a>

```java
public java.lang.Object getForceOverwriteReplicaSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#id SecretsmanagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#policy SecretsmanagerSecret#policy}.

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replica"></a>

```java
public java.lang.Object getReplica();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>>

replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#replica SecretsmanagerSecret#replica}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#tags SecretsmanagerSecret#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}.

---

### SecretsmanagerSecretReplica <a name="SecretsmanagerSecretReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecretReplica;

SecretsmanagerSecretReplica.builder()
    .region(java.lang.String)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretReplicaList <a name="SecretsmanagerSecretReplicaList" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecretReplicaList;

new SecretsmanagerSecretReplicaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get"></a>

```java
public SecretsmanagerSecretReplicaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>>

---


### SecretsmanagerSecretReplicaOutputReference <a name="SecretsmanagerSecretReplicaOutputReference" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.secretsmanager_secret.SecretsmanagerSecretReplicaOutputReference;

new SecretsmanagerSecretReplicaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.lastAccessedDate">lastAccessedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastAccessedDate`<sup>Required</sup> <a name="lastAccessedDate" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.lastAccessedDate"></a>

```java
public java.lang.String getLastAccessedDate();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>

---



