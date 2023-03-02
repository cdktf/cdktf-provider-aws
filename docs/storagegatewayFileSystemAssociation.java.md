# `storagegatewayFileSystemAssociation` Submodule <a name="`storagegatewayFileSystemAssociation` Submodule" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayFileSystemAssociation <a name="StoragegatewayFileSystemAssociation" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association aws_storagegateway_file_system_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_file_system_association.StoragegatewayFileSystemAssociation;

StoragegatewayFileSystemAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .gatewayArn(java.lang.String)
    .locationArn(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .auditDestinationArn(java.lang.String)
//  .cacheAttributes(StoragegatewayFileSystemAssociationCacheAttributes)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.locationArn">locationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.gatewayArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}.

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.locationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}.

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.auditDestinationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}.

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.cacheAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes">putCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetAuditDestinationArn">resetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetCacheAttributes">resetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCacheAttributes` <a name="putCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes"></a>

```java
public void putCacheAttributes(StoragegatewayFileSystemAssociationCacheAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---

##### `resetAuditDestinationArn` <a name="resetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetAuditDestinationArn"></a>

```java
public void resetAuditDestinationArn()
```

##### `resetCacheAttributes` <a name="resetCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetCacheAttributes"></a>

```java
public void resetCacheAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_file_system_association.StoragegatewayFileSystemAssociation;

StoragegatewayFileSystemAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_file_system_association.StoragegatewayFileSystemAssociation;

StoragegatewayFileSystemAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_file_system_association.StoragegatewayFileSystemAssociation;

StoragegatewayFileSystemAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference">StoragegatewayFileSystemAssociationCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArnInput">auditDestinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributesInput">cacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArnInput">gatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArnInput">locationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributes"></a>

```java
public StoragegatewayFileSystemAssociationCacheAttributesOutputReference getCacheAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference">StoragegatewayFileSystemAssociationCacheAttributesOutputReference</a>

---

##### `auditDestinationArnInput`<sup>Optional</sup> <a name="auditDestinationArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArnInput"></a>

```java
public java.lang.String getAuditDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `cacheAttributesInput`<sup>Optional</sup> <a name="cacheAttributesInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributesInput"></a>

```java
public StoragegatewayFileSystemAssociationCacheAttributes getCacheAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArnInput"></a>

```java
public java.lang.String getGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationArnInput`<sup>Optional</sup> <a name="locationArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArnInput"></a>

```java
public java.lang.String getLocationArnInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayFileSystemAssociationCacheAttributes <a name="StoragegatewayFileSystemAssociationCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_file_system_association.StoragegatewayFileSystemAssociationCacheAttributes;

StoragegatewayFileSystemAssociationCacheAttributes.builder()
//  .cacheStaleTimeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}. |

---

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}.

---

### StoragegatewayFileSystemAssociationConfig <a name="StoragegatewayFileSystemAssociationConfig" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_file_system_association.StoragegatewayFileSystemAssociationConfig;

StoragegatewayFileSystemAssociationConfig.builder()
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
    .gatewayArn(java.lang.String)
    .locationArn(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .auditDestinationArn(java.lang.String)
//  .cacheAttributes(StoragegatewayFileSystemAssociationCacheAttributes)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.locationArn">locationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.auditDestinationArn">auditDestinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}.

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.locationArn"></a>

```java
public java.lang.String getLocationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}.

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.auditDestinationArn"></a>

```java
public java.lang.String getAuditDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}.

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.cacheAttributes"></a>

```java
public StoragegatewayFileSystemAssociationCacheAttributes getCacheAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayFileSystemAssociationCacheAttributesOutputReference <a name="StoragegatewayFileSystemAssociationCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_file_system_association.StoragegatewayFileSystemAssociationCacheAttributesOutputReference;

new StoragegatewayFileSystemAssociationCacheAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">resetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheStaleTimeoutInSeconds` <a name="resetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```java
public void resetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cacheStaleTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="cacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```java
public java.lang.Number getCacheStaleTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.internalValue"></a>

```java
public StoragegatewayFileSystemAssociationCacheAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---



