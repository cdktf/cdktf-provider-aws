# `keyspacesTable` Submodule <a name="`keyspacesTable` Submodule" id="@cdktf/provider-aws.keyspacesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyspacesTable <a name="KeyspacesTable" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table aws_keyspaces_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTable;

KeyspacesTable.Builder.create(Construct scope, java.lang.String id)
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
    .keyspaceName(java.lang.String)
    .schemaDefinition(KeyspacesTableSchemaDefinition)
    .tableName(java.lang.String)
//  .capacitySpecification(KeyspacesTableCapacitySpecification)
//  .comment(KeyspacesTableComment)
//  .defaultTimeToLive(java.lang.Number)
//  .encryptionSpecification(KeyspacesTableEncryptionSpecification)
//  .id(java.lang.String)
//  .pointInTimeRecovery(KeyspacesTablePointInTimeRecovery)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KeyspacesTableTimeouts)
//  .ttl(KeyspacesTableTtl)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.keyspaceName">keyspaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.schemaDefinition">schemaDefinition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | schema_definition block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.capacitySpecification">capacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.comment">comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | comment block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.defaultTimeToLive">defaultTimeToLive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.encryptionSpecification">encryptionSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | encryption_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | ttl block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.keyspaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}.

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.schemaDefinition"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

schema_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#schema_definition KeyspacesTable#schema_definition}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}.

---

##### `capacitySpecification`<sup>Optional</sup> <a name="capacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.capacitySpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#capacity_specification KeyspacesTable#capacity_specification}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.comment"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

comment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#comment KeyspacesTable#comment}

---

##### `defaultTimeToLive`<sup>Optional</sup> <a name="defaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.defaultTimeToLive"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}.

---

##### `encryptionSpecification`<sup>Optional</sup> <a name="encryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.encryptionSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

encryption_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#encryption_specification KeyspacesTable#encryption_specification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.pointInTimeRecovery"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#point_in_time_recovery KeyspacesTable#point_in_time_recovery}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#timeouts KeyspacesTable#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.Initializer.parameter.ttl"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#ttl KeyspacesTable#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification">putCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment">putComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification">putEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery">putPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition">putSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetCapacitySpecification">resetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetDefaultTimeToLive">resetDefaultTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetEncryptionSpecification">resetEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetPointInTimeRecovery">resetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapacitySpecification` <a name="putCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification"></a>

```java
public void putCapacitySpecification(KeyspacesTableCapacitySpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putCapacitySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---

##### `putComment` <a name="putComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment"></a>

```java
public void putComment(KeyspacesTableComment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---

##### `putEncryptionSpecification` <a name="putEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification"></a>

```java
public void putEncryptionSpecification(KeyspacesTableEncryptionSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putEncryptionSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---

##### `putPointInTimeRecovery` <a name="putPointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery"></a>

```java
public void putPointInTimeRecovery(KeyspacesTablePointInTimeRecovery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putPointInTimeRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---

##### `putSchemaDefinition` <a name="putSchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition"></a>

```java
public void putSchemaDefinition(KeyspacesTableSchemaDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putSchemaDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts"></a>

```java
public void putTimeouts(KeyspacesTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

---

##### `putTtl` <a name="putTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl"></a>

```java
public void putTtl(KeyspacesTableTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---

##### `resetCapacitySpecification` <a name="resetCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetCapacitySpecification"></a>

```java
public void resetCapacitySpecification()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetComment"></a>

```java
public void resetComment()
```

##### `resetDefaultTimeToLive` <a name="resetDefaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetDefaultTimeToLive"></a>

```java
public void resetDefaultTimeToLive()
```

##### `resetEncryptionSpecification` <a name="resetEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetEncryptionSpecification"></a>

```java
public void resetEncryptionSpecification()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetId"></a>

```java
public void resetId()
```

##### `resetPointInTimeRecovery` <a name="resetPointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetPointInTimeRecovery"></a>

```java
public void resetPointInTimeRecovery()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTable;

KeyspacesTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTable;

KeyspacesTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTable;

KeyspacesTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecification">capacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference">KeyspacesTableCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference">KeyspacesTableCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecification">encryptionSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference">KeyspacesTableEncryptionSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference">KeyspacesTablePointInTimeRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinition">schemaDefinition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference">KeyspacesTableSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference">KeyspacesTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference">KeyspacesTableTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecificationInput">capacitySpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.commentInput">commentInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLiveInput">defaultTimeToLiveInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecificationInput">encryptionSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceNameInput">keyspaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecoveryInput">pointInTimeRecoveryInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinitionInput">schemaDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLive">defaultTimeToLive</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceName">keyspaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacitySpecification`<sup>Required</sup> <a name="capacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecification"></a>

```java
public KeyspacesTableCapacitySpecificationOutputReference getCapacitySpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference">KeyspacesTableCapacitySpecificationOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.comment"></a>

```java
public KeyspacesTableCommentOutputReference getComment();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference">KeyspacesTableCommentOutputReference</a>

---

##### `encryptionSpecification`<sup>Required</sup> <a name="encryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecification"></a>

```java
public KeyspacesTableEncryptionSpecificationOutputReference getEncryptionSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference">KeyspacesTableEncryptionSpecificationOutputReference</a>

---

##### `pointInTimeRecovery`<sup>Required</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecovery"></a>

```java
public KeyspacesTablePointInTimeRecoveryOutputReference getPointInTimeRecovery();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference">KeyspacesTablePointInTimeRecoveryOutputReference</a>

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinition"></a>

```java
public KeyspacesTableSchemaDefinitionOutputReference getSchemaDefinition();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference">KeyspacesTableSchemaDefinitionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeouts"></a>

```java
public KeyspacesTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference">KeyspacesTableTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttl"></a>

```java
public KeyspacesTableTtlOutputReference getTtl();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference">KeyspacesTableTtlOutputReference</a>

---

##### `capacitySpecificationInput`<sup>Optional</sup> <a name="capacitySpecificationInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.capacitySpecificationInput"></a>

```java
public KeyspacesTableCapacitySpecification getCapacitySpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.commentInput"></a>

```java
public KeyspacesTableComment getCommentInput();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---

##### `defaultTimeToLiveInput`<sup>Optional</sup> <a name="defaultTimeToLiveInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLiveInput"></a>

```java
public java.lang.Number getDefaultTimeToLiveInput();
```

- *Type:* java.lang.Number

---

##### `encryptionSpecificationInput`<sup>Optional</sup> <a name="encryptionSpecificationInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.encryptionSpecificationInput"></a>

```java
public KeyspacesTableEncryptionSpecification getEncryptionSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyspaceNameInput`<sup>Optional</sup> <a name="keyspaceNameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceNameInput"></a>

```java
public java.lang.String getKeyspaceNameInput();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryInput`<sup>Optional</sup> <a name="pointInTimeRecoveryInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.pointInTimeRecoveryInput"></a>

```java
public KeyspacesTablePointInTimeRecovery getPointInTimeRecoveryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---

##### `schemaDefinitionInput`<sup>Optional</sup> <a name="schemaDefinitionInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.schemaDefinitionInput"></a>

```java
public KeyspacesTableSchemaDefinition getSchemaDefinitionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.ttlInput"></a>

```java
public KeyspacesTableTtl getTtlInput();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---

##### `defaultTimeToLive`<sup>Required</sup> <a name="defaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.defaultTimeToLive"></a>

```java
public java.lang.Number getDefaultTimeToLive();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.keyspaceName"></a>

```java
public java.lang.String getKeyspaceName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyspacesTableCapacitySpecification <a name="KeyspacesTableCapacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableCapacitySpecification;

KeyspacesTableCapacitySpecification.builder()
//  .readCapacityUnits(java.lang.Number)
//  .throughputMode(java.lang.String)
//  .writeCapacityUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.throughputMode">throughputMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}. |

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="readCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}.

---

##### `throughputMode`<sup>Optional</sup> <a name="throughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.throughputMode"></a>

```java
public java.lang.String getThroughputMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}.

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="writeCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification.property.writeCapacityUnits"></a>

```java
public java.lang.Number getWriteCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}.

---

### KeyspacesTableComment <a name="KeyspacesTableComment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableComment;

KeyspacesTableComment.builder()
//  .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#message KeyspacesTable#message}.

---

### KeyspacesTableConfig <a name="KeyspacesTableConfig" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableConfig;

KeyspacesTableConfig.builder()
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
    .keyspaceName(java.lang.String)
    .schemaDefinition(KeyspacesTableSchemaDefinition)
    .tableName(java.lang.String)
//  .capacitySpecification(KeyspacesTableCapacitySpecification)
//  .comment(KeyspacesTableComment)
//  .defaultTimeToLive(java.lang.Number)
//  .encryptionSpecification(KeyspacesTableEncryptionSpecification)
//  .id(java.lang.String)
//  .pointInTimeRecovery(KeyspacesTablePointInTimeRecovery)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KeyspacesTableTimeouts)
//  .ttl(KeyspacesTableTtl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.keyspaceName">keyspaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.schemaDefinition">schemaDefinition</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | schema_definition block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.capacitySpecification">capacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | comment block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.defaultTimeToLive">defaultTimeToLive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.encryptionSpecification">encryptionSpecification</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | encryption_specification block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | ttl block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyspaceName`<sup>Required</sup> <a name="keyspaceName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.keyspaceName"></a>

```java
public java.lang.String getKeyspaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}.

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.schemaDefinition"></a>

```java
public KeyspacesTableSchemaDefinition getSchemaDefinition();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

schema_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#schema_definition KeyspacesTable#schema_definition}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#table_name KeyspacesTable#table_name}.

---

##### `capacitySpecification`<sup>Optional</sup> <a name="capacitySpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.capacitySpecification"></a>

```java
public KeyspacesTableCapacitySpecification getCapacitySpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#capacity_specification KeyspacesTable#capacity_specification}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.comment"></a>

```java
public KeyspacesTableComment getComment();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

comment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#comment KeyspacesTable#comment}

---

##### `defaultTimeToLive`<sup>Optional</sup> <a name="defaultTimeToLive" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.defaultTimeToLive"></a>

```java
public java.lang.Number getDefaultTimeToLive();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}.

---

##### `encryptionSpecification`<sup>Optional</sup> <a name="encryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.encryptionSpecification"></a>

```java
public KeyspacesTableEncryptionSpecification getEncryptionSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

encryption_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#encryption_specification KeyspacesTable#encryption_specification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#id KeyspacesTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pointInTimeRecovery`<sup>Optional</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.pointInTimeRecovery"></a>

```java
public KeyspacesTablePointInTimeRecovery getPointInTimeRecovery();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#point_in_time_recovery KeyspacesTable#point_in_time_recovery}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags KeyspacesTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#tags_all KeyspacesTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.timeouts"></a>

```java
public KeyspacesTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#timeouts KeyspacesTable#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableConfig.property.ttl"></a>

```java
public KeyspacesTableTtl getTtl();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#ttl KeyspacesTable#ttl}

---

### KeyspacesTableEncryptionSpecification <a name="KeyspacesTableEncryptionSpecification" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableEncryptionSpecification;

KeyspacesTableEncryptionSpecification.builder()
//  .kmsKeyIdentifier(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}. |

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

### KeyspacesTablePointInTimeRecovery <a name="KeyspacesTablePointInTimeRecovery" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTablePointInTimeRecovery;

KeyspacesTablePointInTimeRecovery.builder()
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

### KeyspacesTableSchemaDefinition <a name="KeyspacesTableSchemaDefinition" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinition;

KeyspacesTableSchemaDefinition.builder()
    .column(IResolvable)
    .column(java.util.List<KeyspacesTableSchemaDefinitionColumn>)
    .partitionKey(IResolvable)
    .partitionKey(java.util.List<KeyspacesTableSchemaDefinitionPartitionKey>)
//  .clusteringKey(IResolvable)
//  .clusteringKey(java.util.List<KeyspacesTableSchemaDefinitionClusteringKey>)
//  .staticColumn(IResolvable)
//  .staticColumn(java.util.List<KeyspacesTableSchemaDefinitionStaticColumn>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.column">column</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>></code> | column block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.partitionKey">partitionKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>></code> | partition_key block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.clusteringKey">clusteringKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>></code> | clustering_key block. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.staticColumn">staticColumn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>></code> | static_column block. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.column"></a>

```java
public java.lang.Object getColumn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>>

column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#column KeyspacesTable#column}

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.partitionKey"></a>

```java
public java.lang.Object getPartitionKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>>

partition_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#partition_key KeyspacesTable#partition_key}

---

##### `clusteringKey`<sup>Optional</sup> <a name="clusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.clusteringKey"></a>

```java
public java.lang.Object getClusteringKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>>

clustering_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#clustering_key KeyspacesTable#clustering_key}

---

##### `staticColumn`<sup>Optional</sup> <a name="staticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition.property.staticColumn"></a>

```java
public java.lang.Object getStaticColumn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>>

static_column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#static_column KeyspacesTable#static_column}

---

### KeyspacesTableSchemaDefinitionClusteringKey <a name="KeyspacesTableSchemaDefinitionClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionClusteringKey;

KeyspacesTableSchemaDefinitionClusteringKey.builder()
    .name(java.lang.String)
    .orderBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#order_by KeyspacesTable#order_by}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#order_by KeyspacesTable#order_by}.

---

### KeyspacesTableSchemaDefinitionColumn <a name="KeyspacesTableSchemaDefinitionColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionColumn;

KeyspacesTableSchemaDefinitionColumn.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#type KeyspacesTable#type}.

---

### KeyspacesTableSchemaDefinitionPartitionKey <a name="KeyspacesTableSchemaDefinitionPartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionPartitionKey;

KeyspacesTableSchemaDefinitionPartitionKey.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

### KeyspacesTableSchemaDefinitionStaticColumn <a name="KeyspacesTableSchemaDefinitionStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionStaticColumn;

KeyspacesTableSchemaDefinitionStaticColumn.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#name KeyspacesTable#name}.

---

### KeyspacesTableTimeouts <a name="KeyspacesTableTimeouts" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableTimeouts;

KeyspacesTableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#create KeyspacesTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#delete KeyspacesTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#update KeyspacesTable#update}.

---

### KeyspacesTableTtl <a name="KeyspacesTableTtl" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableTtl;

KeyspacesTableTtl.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/keyspaces_table#status KeyspacesTable#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyspacesTableCapacitySpecificationOutputReference <a name="KeyspacesTableCapacitySpecificationOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableCapacitySpecificationOutputReference;

new KeyspacesTableCapacitySpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetReadCapacityUnits">resetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetThroughputMode">resetThroughputMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetWriteCapacityUnits">resetWriteCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadCapacityUnits` <a name="resetReadCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetReadCapacityUnits"></a>

```java
public void resetReadCapacityUnits()
```

##### `resetThroughputMode` <a name="resetThroughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetThroughputMode"></a>

```java
public void resetThroughputMode()
```

##### `resetWriteCapacityUnits` <a name="resetWriteCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.resetWriteCapacityUnits"></a>

```java
public void resetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnitsInput">readCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputModeInput">throughputModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnitsInput">writeCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputMode">throughputMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readCapacityUnitsInput`<sup>Optional</sup> <a name="readCapacityUnitsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnitsInput"></a>

```java
public java.lang.Number getReadCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `throughputModeInput`<sup>Optional</sup> <a name="throughputModeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputModeInput"></a>

```java
public java.lang.String getThroughputModeInput();
```

- *Type:* java.lang.String

---

##### `writeCapacityUnitsInput`<sup>Optional</sup> <a name="writeCapacityUnitsInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnitsInput"></a>

```java
public java.lang.Number getWriteCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `throughputMode`<sup>Required</sup> <a name="throughputMode" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.throughputMode"></a>

```java
public java.lang.String getThroughputMode();
```

- *Type:* java.lang.String

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="writeCapacityUnits" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.writeCapacityUnits"></a>

```java
public java.lang.Number getWriteCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecificationOutputReference.property.internalValue"></a>

```java
public KeyspacesTableCapacitySpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCapacitySpecification">KeyspacesTableCapacitySpecification</a>

---


### KeyspacesTableCommentOutputReference <a name="KeyspacesTableCommentOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableCommentOutputReference;

new KeyspacesTableCommentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.resetMessage"></a>

```java
public void resetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableCommentOutputReference.property.internalValue"></a>

```java
public KeyspacesTableComment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableComment">KeyspacesTableComment</a>

---


### KeyspacesTableEncryptionSpecificationOutputReference <a name="KeyspacesTableEncryptionSpecificationOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableEncryptionSpecificationOutputReference;

new KeyspacesTableEncryptionSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecificationOutputReference.property.internalValue"></a>

```java
public KeyspacesTableEncryptionSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableEncryptionSpecification">KeyspacesTableEncryptionSpecification</a>

---


### KeyspacesTablePointInTimeRecoveryOutputReference <a name="KeyspacesTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTablePointInTimeRecoveryOutputReference;

new KeyspacesTablePointInTimeRecoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```java
public KeyspacesTablePointInTimeRecovery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTablePointInTimeRecovery">KeyspacesTablePointInTimeRecovery</a>

---


### KeyspacesTableSchemaDefinitionClusteringKeyList <a name="KeyspacesTableSchemaDefinitionClusteringKeyList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionClusteringKeyList;

new KeyspacesTableSchemaDefinitionClusteringKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get"></a>

```java
public KeyspacesTableSchemaDefinitionClusteringKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>>

---


### KeyspacesTableSchemaDefinitionClusteringKeyOutputReference <a name="KeyspacesTableSchemaDefinitionClusteringKeyOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference;

new KeyspacesTableSchemaDefinitionClusteringKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a> OR com.hashicorp.cdktf.IResolvable

---


### KeyspacesTableSchemaDefinitionColumnList <a name="KeyspacesTableSchemaDefinitionColumnList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionColumnList;

new KeyspacesTableSchemaDefinitionColumnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get"></a>

```java
public KeyspacesTableSchemaDefinitionColumnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>>

---


### KeyspacesTableSchemaDefinitionColumnOutputReference <a name="KeyspacesTableSchemaDefinitionColumnOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionColumnOutputReference;

new KeyspacesTableSchemaDefinitionColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a> OR com.hashicorp.cdktf.IResolvable

---


### KeyspacesTableSchemaDefinitionOutputReference <a name="KeyspacesTableSchemaDefinitionOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionOutputReference;

new KeyspacesTableSchemaDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey">putClusteringKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey">putPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn">putStaticColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetClusteringKey">resetClusteringKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetStaticColumn">resetStaticColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusteringKey` <a name="putClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey"></a>

```java
public void putClusteringKey(IResolvable OR java.util.List<KeyspacesTableSchemaDefinitionClusteringKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putClusteringKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>>

---

##### `putColumn` <a name="putColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn"></a>

```java
public void putColumn(IResolvable OR java.util.List<KeyspacesTableSchemaDefinitionColumn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putColumn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>>

---

##### `putPartitionKey` <a name="putPartitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey"></a>

```java
public void putPartitionKey(IResolvable OR java.util.List<KeyspacesTableSchemaDefinitionPartitionKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putPartitionKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>>

---

##### `putStaticColumn` <a name="putStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn"></a>

```java
public void putStaticColumn(IResolvable OR java.util.List<KeyspacesTableSchemaDefinitionStaticColumn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.putStaticColumn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>>

---

##### `resetClusteringKey` <a name="resetClusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetClusteringKey"></a>

```java
public void resetClusteringKey()
```

##### `resetStaticColumn` <a name="resetStaticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.resetStaticColumn"></a>

```java
public void resetStaticColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKey">clusteringKey</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList">KeyspacesTableSchemaDefinitionClusteringKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList">KeyspacesTableSchemaDefinitionColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKey">partitionKey</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList">KeyspacesTableSchemaDefinitionPartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumn">staticColumn</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList">KeyspacesTableSchemaDefinitionStaticColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKeyInput">clusteringKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.columnInput">columnInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKeyInput">partitionKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumnInput">staticColumnInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusteringKey`<sup>Required</sup> <a name="clusteringKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKey"></a>

```java
public KeyspacesTableSchemaDefinitionClusteringKeyList getClusteringKey();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKeyList">KeyspacesTableSchemaDefinitionClusteringKeyList</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.column"></a>

```java
public KeyspacesTableSchemaDefinitionColumnList getColumn();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumnList">KeyspacesTableSchemaDefinitionColumnList</a>

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKey"></a>

```java
public KeyspacesTableSchemaDefinitionPartitionKeyList getPartitionKey();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList">KeyspacesTableSchemaDefinitionPartitionKeyList</a>

---

##### `staticColumn`<sup>Required</sup> <a name="staticColumn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumn"></a>

```java
public KeyspacesTableSchemaDefinitionStaticColumnList getStaticColumn();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList">KeyspacesTableSchemaDefinitionStaticColumnList</a>

---

##### `clusteringKeyInput`<sup>Optional</sup> <a name="clusteringKeyInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.clusteringKeyInput"></a>

```java
public java.lang.Object getClusteringKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionClusteringKey">KeyspacesTableSchemaDefinitionClusteringKey</a>>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.columnInput"></a>

```java
public java.lang.Object getColumnInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionColumn">KeyspacesTableSchemaDefinitionColumn</a>>

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.partitionKeyInput"></a>

```java
public java.lang.Object getPartitionKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>>

---

##### `staticColumnInput`<sup>Optional</sup> <a name="staticColumnInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.staticColumnInput"></a>

```java
public java.lang.Object getStaticColumnInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionOutputReference.property.internalValue"></a>

```java
public KeyspacesTableSchemaDefinition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinition">KeyspacesTableSchemaDefinition</a>

---


### KeyspacesTableSchemaDefinitionPartitionKeyList <a name="KeyspacesTableSchemaDefinitionPartitionKeyList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionPartitionKeyList;

new KeyspacesTableSchemaDefinitionPartitionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get"></a>

```java
public KeyspacesTableSchemaDefinitionPartitionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a>>

---


### KeyspacesTableSchemaDefinitionPartitionKeyOutputReference <a name="KeyspacesTableSchemaDefinitionPartitionKeyOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference;

new KeyspacesTableSchemaDefinitionPartitionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionPartitionKey">KeyspacesTableSchemaDefinitionPartitionKey</a> OR com.hashicorp.cdktf.IResolvable

---


### KeyspacesTableSchemaDefinitionStaticColumnList <a name="KeyspacesTableSchemaDefinitionStaticColumnList" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionStaticColumnList;

new KeyspacesTableSchemaDefinitionStaticColumnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get"></a>

```java
public KeyspacesTableSchemaDefinitionStaticColumnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a>>

---


### KeyspacesTableSchemaDefinitionStaticColumnOutputReference <a name="KeyspacesTableSchemaDefinitionStaticColumnOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableSchemaDefinitionStaticColumnOutputReference;

new KeyspacesTableSchemaDefinitionStaticColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumnOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableSchemaDefinitionStaticColumn">KeyspacesTableSchemaDefinitionStaticColumn</a> OR com.hashicorp.cdktf.IResolvable

---


### KeyspacesTableTimeoutsOutputReference <a name="KeyspacesTableTimeoutsOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableTimeoutsOutputReference;

new KeyspacesTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTimeouts">KeyspacesTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### KeyspacesTableTtlOutputReference <a name="KeyspacesTableTtlOutputReference" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.keyspaces_table.KeyspacesTableTtlOutputReference;

new KeyspacesTableTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtlOutputReference.property.internalValue"></a>

```java
public KeyspacesTableTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.keyspacesTable.KeyspacesTableTtl">KeyspacesTableTtl</a>

---



