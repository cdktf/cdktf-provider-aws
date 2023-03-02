# `directoryServiceRegion` Submodule <a name="`directoryServiceRegion` Submodule" id="@cdktf/provider-aws.directoryServiceRegion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceRegion <a name="DirectoryServiceRegion" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region aws_directory_service_region}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegion;

DirectoryServiceRegion.Builder.create(Construct scope, java.lang.String id)
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
    .directoryId(java.lang.String)
    .regionName(java.lang.String)
    .vpcSettings(DirectoryServiceRegionVpcSettings)
//  .desiredNumberOfDomainControllers(java.lang.Number)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DirectoryServiceRegionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.regionName">regionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | vpc_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}.

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.regionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}.

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_settings DirectoryServiceRegion#vpc_settings}

---

##### `desiredNumberOfDomainControllers`<sup>Optional</sup> <a name="desiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.desiredNumberOfDomainControllers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#timeouts DirectoryServiceRegion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings">putVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetDesiredNumberOfDomainControllers">resetDesiredNumberOfDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts"></a>

```java
public void putTimeouts(DirectoryServiceRegionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>

---

##### `putVpcSettings` <a name="putVpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings"></a>

```java
public void putVpcSettings(DirectoryServiceRegionVpcSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

---

##### `resetDesiredNumberOfDomainControllers` <a name="resetDesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetDesiredNumberOfDomainControllers"></a>

```java
public void resetDesiredNumberOfDomainControllers()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegion;

DirectoryServiceRegion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegion;

DirectoryServiceRegion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegion;

DirectoryServiceRegion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference">DirectoryServiceRegionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference">DirectoryServiceRegionVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllersInput">desiredNumberOfDomainControllersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettingsInput">vpcSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeouts"></a>

```java
public DirectoryServiceRegionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference">DirectoryServiceRegionTimeoutsOutputReference</a>

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettings"></a>

```java
public DirectoryServiceRegionVpcSettingsOutputReference getVpcSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference">DirectoryServiceRegionVpcSettingsOutputReference</a>

---

##### `desiredNumberOfDomainControllersInput`<sup>Optional</sup> <a name="desiredNumberOfDomainControllersInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllersInput"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllersInput();
```

- *Type:* java.lang.Number

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcSettingsInput`<sup>Optional</sup> <a name="vpcSettingsInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettingsInput"></a>

```java
public DirectoryServiceRegionVpcSettings getVpcSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

---

##### `desiredNumberOfDomainControllers`<sup>Required</sup> <a name="desiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllers"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllers();
```

- *Type:* java.lang.Number

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceRegionConfig <a name="DirectoryServiceRegionConfig" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegionConfig;

DirectoryServiceRegionConfig.builder()
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
    .directoryId(java.lang.String)
    .regionName(java.lang.String)
    .vpcSettings(DirectoryServiceRegionVpcSettings)
//  .desiredNumberOfDomainControllers(java.lang.Number)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DirectoryServiceRegionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.regionName">regionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | vpc_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}.

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}.

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.vpcSettings"></a>

```java
public DirectoryServiceRegionVpcSettings getVpcSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_settings DirectoryServiceRegion#vpc_settings}

---

##### `desiredNumberOfDomainControllers`<sup>Optional</sup> <a name="desiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.desiredNumberOfDomainControllers"></a>

```java
public java.lang.Number getDesiredNumberOfDomainControllers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.timeouts"></a>

```java
public DirectoryServiceRegionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#timeouts DirectoryServiceRegion#timeouts}

---

### DirectoryServiceRegionTimeouts <a name="DirectoryServiceRegionTimeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegionTimeouts;

DirectoryServiceRegionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#create DirectoryServiceRegion#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#delete DirectoryServiceRegion#delete}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#update DirectoryServiceRegion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#create DirectoryServiceRegion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#delete DirectoryServiceRegion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#update DirectoryServiceRegion#update}.

---

### DirectoryServiceRegionVpcSettings <a name="DirectoryServiceRegionVpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegionVpcSettings;

DirectoryServiceRegionVpcSettings.builder()
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#subnet_ids DirectoryServiceRegion#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_id DirectoryServiceRegion#vpc_id}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#subnet_ids DirectoryServiceRegion#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_id DirectoryServiceRegion#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceRegionTimeoutsOutputReference <a name="DirectoryServiceRegionTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegionTimeoutsOutputReference;

new DirectoryServiceRegionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### DirectoryServiceRegionVpcSettingsOutputReference <a name="DirectoryServiceRegionVpcSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_region.DirectoryServiceRegionVpcSettingsOutputReference;

new DirectoryServiceRegionVpcSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.internalValue"></a>

```java
public DirectoryServiceRegionVpcSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

---



