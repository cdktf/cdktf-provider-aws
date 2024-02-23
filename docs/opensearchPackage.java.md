# `opensearchPackage` Submodule <a name="`opensearchPackage` Submodule" id="@cdktf/provider-aws.opensearchPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchPackage <a name="OpensearchPackage" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package aws_opensearch_package}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_package.OpensearchPackage;

OpensearchPackage.Builder.create(Construct scope, java.lang.String id)
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
    .packageName(java.lang.String)
    .packageSource(OpensearchPackagePackageSource)
    .packageType(java.lang.String)
//  .id(java.lang.String)
//  .packageDescription(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.packageName">packageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.packageSource">packageSource</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | package_source block. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.packageType">packageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#id OpensearchPackage#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.packageDescription">packageDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.packageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}.

---

##### `packageSource`<sup>Required</sup> <a name="packageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.packageSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

package_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_source OpensearchPackage#package_source}

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.packageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#id OpensearchPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageDescription`<sup>Optional</sup> <a name="packageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.Initializer.parameter.packageDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource">putPackageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetPackageDescription">resetPackageDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPackageSource` <a name="putPackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource"></a>

```java
public void putPackageSource(OpensearchPackagePackageSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.putPackageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetId"></a>

```java
public void resetId()
```

##### `resetPackageDescription` <a name="resetPackageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.resetPackageDescription"></a>

```java
public void resetPackageDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchPackage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_package.OpensearchPackage;

OpensearchPackage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_package.OpensearchPackage;

OpensearchPackage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_package.OpensearchPackage;

OpensearchPackage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_package.OpensearchPackage;

OpensearchPackage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchPackage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpensearchPackage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.availablePackageVersion">availablePackageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageId">packageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSource">packageSource</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference">OpensearchPackagePackageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescriptionInput">packageDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageNameInput">packageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSourceInput">packageSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageTypeInput">packageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescription">packageDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageName">packageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageType">packageType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availablePackageVersion`<sup>Required</sup> <a name="availablePackageVersion" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.availablePackageVersion"></a>

```java
public java.lang.String getAvailablePackageVersion();
```

- *Type:* java.lang.String

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageId"></a>

```java
public java.lang.String getPackageId();
```

- *Type:* java.lang.String

---

##### `packageSource`<sup>Required</sup> <a name="packageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSource"></a>

```java
public OpensearchPackagePackageSourceOutputReference getPackageSource();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference">OpensearchPackagePackageSourceOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `packageDescriptionInput`<sup>Optional</sup> <a name="packageDescriptionInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescriptionInput"></a>

```java
public java.lang.String getPackageDescriptionInput();
```

- *Type:* java.lang.String

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageNameInput"></a>

```java
public java.lang.String getPackageNameInput();
```

- *Type:* java.lang.String

---

##### `packageSourceInput`<sup>Optional</sup> <a name="packageSourceInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageSourceInput"></a>

```java
public OpensearchPackagePackageSource getPackageSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---

##### `packageTypeInput`<sup>Optional</sup> <a name="packageTypeInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageTypeInput"></a>

```java
public java.lang.String getPackageTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `packageDescription`<sup>Required</sup> <a name="packageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageDescription"></a>

```java
public java.lang.String getPackageDescription();
```

- *Type:* java.lang.String

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageName"></a>

```java
public java.lang.String getPackageName();
```

- *Type:* java.lang.String

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchPackageConfig <a name="OpensearchPackageConfig" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_package.OpensearchPackageConfig;

OpensearchPackageConfig.builder()
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
    .packageName(java.lang.String)
    .packageSource(OpensearchPackagePackageSource)
    .packageType(java.lang.String)
//  .id(java.lang.String)
//  .packageDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageName">packageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageSource">packageSource</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | package_source block. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageType">packageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#id OpensearchPackage#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageDescription">packageDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageName"></a>

```java
public java.lang.String getPackageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_name OpensearchPackage#package_name}.

---

##### `packageSource`<sup>Required</sup> <a name="packageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageSource"></a>

```java
public OpensearchPackagePackageSource getPackageSource();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

package_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_source OpensearchPackage#package_source}

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_type OpensearchPackage#package_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#id OpensearchPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageDescription`<sup>Optional</sup> <a name="packageDescription" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackageConfig.property.packageDescription"></a>

```java
public java.lang.String getPackageDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#package_description OpensearchPackage#package_description}.

---

### OpensearchPackagePackageSource <a name="OpensearchPackagePackageSource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_package.OpensearchPackagePackageSource;

OpensearchPackagePackageSource.builder()
    .s3BucketName(java.lang.String)
    .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#s3_bucket_name OpensearchPackage#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#s3_key OpensearchPackage#s3_key}. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#s3_bucket_name OpensearchPackage#s3_bucket_name}.

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/opensearch_package#s3_key OpensearchPackage#s3_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchPackagePackageSourceOutputReference <a name="OpensearchPackagePackageSourceOutputReference" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_package.OpensearchPackagePackageSourceOutputReference;

new OpensearchPackagePackageSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSourceOutputReference.property.internalValue"></a>

```java
public OpensearchPackagePackageSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchPackage.OpensearchPackagePackageSource">OpensearchPackagePackageSource</a>

---



