# `aws_cleanrooms_collaboration`

Refer to the Terraform Registory for docs: [`aws_cleanrooms_collaboration`](https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration).

# `cleanroomsCollaboration` Submodule <a name="`cleanroomsCollaboration` Submodule" id="@cdktf/provider-aws.cleanroomsCollaboration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsCollaboration <a name="CleanroomsCollaboration" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration aws_cleanrooms_collaboration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaboration;

CleanroomsCollaboration.Builder.create(Construct scope, java.lang.String id)
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
    .creatorDisplayName(java.lang.String)
    .creatorMemberAbilities(java.util.List<java.lang.String>)
    .description(java.lang.String)
    .name(java.lang.String)
    .queryLogStatus(java.lang.String)
//  .dataEncryptionMetadata(CleanroomsCollaborationDataEncryptionMetadata)
//  .member(IResolvable)
//  .member(java.util.List<CleanroomsCollaborationMember>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CleanroomsCollaborationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorDisplayName">creatorDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorMemberAbilities">creatorMemberAbilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.queryLogStatus">queryLogStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dataEncryptionMetadata">dataEncryptionMetadata</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | data_encryption_metadata block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.member">member</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>></code> | member block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creatorDisplayName`<sup>Required</sup> <a name="creatorDisplayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorDisplayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `creatorMemberAbilities`<sup>Required</sup> <a name="creatorMemberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorMemberAbilities"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.queryLogStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `dataEncryptionMetadata`<sup>Optional</sup> <a name="dataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dataEncryptionMetadata"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

data_encryption_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.member"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>>

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#member CleanroomsCollaboration#member}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#timeouts CleanroomsCollaboration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata">putDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember">putMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata">resetDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetMember">resetMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDataEncryptionMetadata` <a name="putDataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata"></a>

```java
public void putDataEncryptionMetadata(CleanroomsCollaborationDataEncryptionMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `putMember` <a name="putMember" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember"></a>

```java
public void putMember(IResolvable OR java.util.List<CleanroomsCollaborationMember> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts"></a>

```java
public void putTimeouts(CleanroomsCollaborationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

---

##### `resetDataEncryptionMetadata` <a name="resetDataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata"></a>

```java
public void resetDataEncryptionMetadata()
```

##### `resetMember` <a name="resetMember" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetMember"></a>

```java
public void resetMember()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaboration;

CleanroomsCollaboration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaboration;

CleanroomsCollaboration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaboration;

CleanroomsCollaboration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata">dataEncryptionMetadata</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.member">member</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList">CleanroomsCollaborationMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference">CleanroomsCollaborationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput">creatorDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput">creatorMemberAbilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput">dataEncryptionMetadataInput</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.memberInput">memberInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput">queryLogStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName">creatorDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities">creatorMemberAbilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus">queryLogStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataEncryptionMetadata`<sup>Required</sup> <a name="dataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata"></a>

```java
public CleanroomsCollaborationDataEncryptionMetadataOutputReference getDataEncryptionMetadata();
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.member"></a>

```java
public CleanroomsCollaborationMemberList getMember();
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList">CleanroomsCollaborationMemberList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeouts"></a>

```java
public CleanroomsCollaborationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference">CleanroomsCollaborationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `creatorDisplayNameInput`<sup>Optional</sup> <a name="creatorDisplayNameInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput"></a>

```java
public java.lang.String getCreatorDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `creatorMemberAbilitiesInput`<sup>Optional</sup> <a name="creatorMemberAbilitiesInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCreatorMemberAbilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataEncryptionMetadataInput`<sup>Optional</sup> <a name="dataEncryptionMetadataInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput"></a>

```java
public CleanroomsCollaborationDataEncryptionMetadata getDataEncryptionMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.memberInput"></a>

```java
public java.lang.Object getMemberInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryLogStatusInput`<sup>Optional</sup> <a name="queryLogStatusInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput"></a>

```java
public java.lang.String getQueryLogStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

---

##### `creatorDisplayName`<sup>Required</sup> <a name="creatorDisplayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName"></a>

```java
public java.lang.String getCreatorDisplayName();
```

- *Type:* java.lang.String

---

##### `creatorMemberAbilities`<sup>Required</sup> <a name="creatorMemberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities"></a>

```java
public java.util.List<java.lang.String> getCreatorMemberAbilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus"></a>

```java
public java.lang.String getQueryLogStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsCollaborationConfig <a name="CleanroomsCollaborationConfig" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaborationConfig;

CleanroomsCollaborationConfig.builder()
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
    .creatorDisplayName(java.lang.String)
    .creatorMemberAbilities(java.util.List<java.lang.String>)
    .description(java.lang.String)
    .name(java.lang.String)
    .queryLogStatus(java.lang.String)
//  .dataEncryptionMetadata(CleanroomsCollaborationDataEncryptionMetadata)
//  .member(IResolvable)
//  .member(java.util.List<CleanroomsCollaborationMember>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CleanroomsCollaborationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName">creatorDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities">creatorMemberAbilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus">queryLogStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata">dataEncryptionMetadata</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | data_encryption_metadata block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.member">member</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>></code> | member block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creatorDisplayName`<sup>Required</sup> <a name="creatorDisplayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName"></a>

```java
public java.lang.String getCreatorDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `creatorMemberAbilities`<sup>Required</sup> <a name="creatorMemberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities"></a>

```java
public java.util.List<java.lang.String> getCreatorMemberAbilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus"></a>

```java
public java.lang.String getQueryLogStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `dataEncryptionMetadata`<sup>Optional</sup> <a name="dataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata"></a>

```java
public CleanroomsCollaborationDataEncryptionMetadata getDataEncryptionMetadata();
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

data_encryption_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.member"></a>

```java
public java.lang.Object getMember();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>>

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#member CleanroomsCollaboration#member}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.timeouts"></a>

```java
public CleanroomsCollaborationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#timeouts CleanroomsCollaboration#timeouts}

---

### CleanroomsCollaborationDataEncryptionMetadata <a name="CleanroomsCollaborationDataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaborationDataEncryptionMetadata;

CleanroomsCollaborationDataEncryptionMetadata.builder()
    .allowClearText(java.lang.Boolean)
    .allowClearText(IResolvable)
    .allowDuplicates(java.lang.Boolean)
    .allowDuplicates(IResolvable)
    .allowJoinsOnColumnsWithDifferentNames(java.lang.Boolean)
    .allowJoinsOnColumnsWithDifferentNames(IResolvable)
    .preserveNulls(java.lang.Boolean)
    .preserveNulls(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowClearText">allowClearText</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates">allowDuplicates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames">allowJoinsOnColumnsWithDifferentNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls">preserveNulls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}. |

---

##### `allowClearText`<sup>Required</sup> <a name="allowClearText" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowClearText"></a>

```java
public java.lang.Object getAllowClearText();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}.

---

##### `allowDuplicates`<sup>Required</sup> <a name="allowDuplicates" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates"></a>

```java
public java.lang.Object getAllowDuplicates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}.

---

##### `allowJoinsOnColumnsWithDifferentNames`<sup>Required</sup> <a name="allowJoinsOnColumnsWithDifferentNames" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames"></a>

```java
public java.lang.Object getAllowJoinsOnColumnsWithDifferentNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}.

---

##### `preserveNulls`<sup>Required</sup> <a name="preserveNulls" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls"></a>

```java
public java.lang.Object getPreserveNulls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}.

---

### CleanroomsCollaborationMember <a name="CleanroomsCollaborationMember" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaborationMember;

CleanroomsCollaborationMember.builder()
    .accountId(java.lang.String)
    .displayName(java.lang.String)
    .memberAbilities(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.memberAbilities">memberAbilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}.

---

##### `memberAbilities`<sup>Required</sup> <a name="memberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.memberAbilities"></a>

```java
public java.util.List<java.lang.String> getMemberAbilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}.

---

### CleanroomsCollaborationTimeouts <a name="CleanroomsCollaborationTimeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaborationTimeouts;

CleanroomsCollaborationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsCollaborationDataEncryptionMetadataOutputReference <a name="CleanroomsCollaborationDataEncryptionMetadataOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference;

new CleanroomsCollaborationDataEncryptionMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearTextInput">allowClearTextInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput">allowDuplicatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput">allowJoinsOnColumnsWithDifferentNamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput">preserveNullsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearText">allowClearText</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates">allowDuplicates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames">allowJoinsOnColumnsWithDifferentNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls">preserveNulls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowClearTextInput`<sup>Optional</sup> <a name="allowClearTextInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearTextInput"></a>

```java
public java.lang.Object getAllowClearTextInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowDuplicatesInput`<sup>Optional</sup> <a name="allowDuplicatesInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput"></a>

```java
public java.lang.Object getAllowDuplicatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowJoinsOnColumnsWithDifferentNamesInput`<sup>Optional</sup> <a name="allowJoinsOnColumnsWithDifferentNamesInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput"></a>

```java
public java.lang.Object getAllowJoinsOnColumnsWithDifferentNamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preserveNullsInput`<sup>Optional</sup> <a name="preserveNullsInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput"></a>

```java
public java.lang.Object getPreserveNullsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowClearText`<sup>Required</sup> <a name="allowClearText" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearText"></a>

```java
public java.lang.Object getAllowClearText();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowDuplicates`<sup>Required</sup> <a name="allowDuplicates" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates"></a>

```java
public java.lang.Object getAllowDuplicates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowJoinsOnColumnsWithDifferentNames`<sup>Required</sup> <a name="allowJoinsOnColumnsWithDifferentNames" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames"></a>

```java
public java.lang.Object getAllowJoinsOnColumnsWithDifferentNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preserveNulls`<sup>Required</sup> <a name="preserveNulls" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls"></a>

```java
public java.lang.Object getPreserveNulls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue"></a>

```java
public CleanroomsCollaborationDataEncryptionMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---


### CleanroomsCollaborationMemberList <a name="CleanroomsCollaborationMemberList" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaborationMemberList;

new CleanroomsCollaborationMemberList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get"></a>

```java
public CleanroomsCollaborationMemberOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>>

---


### CleanroomsCollaborationMemberOutputReference <a name="CleanroomsCollaborationMemberOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaborationMemberOutputReference;

new CleanroomsCollaborationMemberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilitiesInput">memberAbilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilities">memberAbilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `memberAbilitiesInput`<sup>Optional</sup> <a name="memberAbilitiesInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilitiesInput"></a>

```java
public java.util.List<java.lang.String> getMemberAbilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `memberAbilities`<sup>Required</sup> <a name="memberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilities"></a>

```java
public java.util.List<java.lang.String> getMemberAbilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>

---


### CleanroomsCollaborationTimeoutsOutputReference <a name="CleanroomsCollaborationTimeoutsOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cleanrooms_collaboration.CleanroomsCollaborationTimeoutsOutputReference;

new CleanroomsCollaborationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

---



