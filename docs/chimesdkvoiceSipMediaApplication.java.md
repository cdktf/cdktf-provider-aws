# `chimesdkvoiceSipMediaApplication` Submodule <a name="`chimesdkvoiceSipMediaApplication` Submodule" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceSipMediaApplication <a name="ChimesdkvoiceSipMediaApplication" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application aws_chimesdkvoice_sip_media_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_media_application.ChimesdkvoiceSipMediaApplication;

ChimesdkvoiceSipMediaApplication.Builder.create(Construct scope, java.lang.String id)
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
    .awsRegion(java.lang.String)
    .endpoints(ChimesdkvoiceSipMediaApplicationEndpoints)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.awsRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}.

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.endpoints"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#endpoints ChimesdkvoiceSipMediaApplication#endpoints}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints"></a>

```java
public void putEndpoints(ChimesdkvoiceSipMediaApplicationEndpoints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChimesdkvoiceSipMediaApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_media_application.ChimesdkvoiceSipMediaApplication;

ChimesdkvoiceSipMediaApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_media_application.ChimesdkvoiceSipMediaApplication;

ChimesdkvoiceSipMediaApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_media_application.ChimesdkvoiceSipMediaApplication;

ChimesdkvoiceSipMediaApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_media_application.ChimesdkvoiceSipMediaApplication;

ChimesdkvoiceSipMediaApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChimesdkvoiceSipMediaApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ChimesdkvoiceSipMediaApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChimesdkvoiceSipMediaApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChimesdkvoiceSipMediaApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceSipMediaApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference">ChimesdkvoiceSipMediaApplicationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpointsInput">endpointsInput</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpoints"></a>

```java
public ChimesdkvoiceSipMediaApplicationEndpointsOutputReference getEndpoints();
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference">ChimesdkvoiceSipMediaApplicationEndpointsOutputReference</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpointsInput"></a>

```java
public ChimesdkvoiceSipMediaApplicationEndpoints getEndpointsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceSipMediaApplicationConfig <a name="ChimesdkvoiceSipMediaApplicationConfig" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_media_application.ChimesdkvoiceSipMediaApplicationConfig;

ChimesdkvoiceSipMediaApplicationConfig.builder()
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
    .awsRegion(java.lang.String)
    .endpoints(ChimesdkvoiceSipMediaApplicationEndpoints)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}.

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.endpoints"></a>

```java
public ChimesdkvoiceSipMediaApplicationEndpoints getEndpoints();
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#endpoints ChimesdkvoiceSipMediaApplication#endpoints}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}.

---

### ChimesdkvoiceSipMediaApplicationEndpoints <a name="ChimesdkvoiceSipMediaApplicationEndpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_media_application.ChimesdkvoiceSipMediaApplicationEndpoints;

ChimesdkvoiceSipMediaApplicationEndpoints.builder()
    .lambdaArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}. |

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceSipMediaApplicationEndpointsOutputReference <a name="ChimesdkvoiceSipMediaApplicationEndpointsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_media_application.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference;

new ChimesdkvoiceSipMediaApplicationEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.internalValue"></a>

```java
public ChimesdkvoiceSipMediaApplicationEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---



