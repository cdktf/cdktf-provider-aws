# `dataAwsSsoadminApplication` Submodule <a name="`dataAwsSsoadminApplication` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminApplication <a name="DataAwsSsoadminApplication" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application aws_ssoadmin_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplication;

DataAwsSsoadminApplication.Builder.create(Construct scope, java.lang.String id)
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
    .applicationArn(java.lang.String)
//  .portalOptions(IResolvable)
//  .portalOptions(java.util.List<DataAwsSsoadminApplicationPortalOptions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application#application_arn DataAwsSsoadminApplication#application_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.portalOptions">portalOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>></code> | portal_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.applicationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application#application_arn DataAwsSsoadminApplication#application_arn}.

---

##### `portalOptions`<sup>Optional</sup> <a name="portalOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.Initializer.parameter.portalOptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>>

portal_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application#portal_options DataAwsSsoadminApplication#portal_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.putPortalOptions">putPortalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.resetPortalOptions">resetPortalOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPortalOptions` <a name="putPortalOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.putPortalOptions"></a>

```java
public void putPortalOptions(IResolvable OR java.util.List<DataAwsSsoadminApplicationPortalOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.putPortalOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>>

---

##### `resetPortalOptions` <a name="resetPortalOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.resetPortalOptions"></a>

```java
public void resetPortalOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsoadminApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplication;

DataAwsSsoadminApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplication;

DataAwsSsoadminApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplication;

DataAwsSsoadminApplication.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplication;

DataAwsSsoadminApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsSsoadminApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsSsoadminApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsSsoadminApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsSsoadminApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.applicationAccount">applicationAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.applicationProviderArn">applicationProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.portalOptions">portalOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList">DataAwsSsoadminApplicationPortalOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.applicationArnInput">applicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.portalOptionsInput">portalOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `applicationAccount`<sup>Required</sup> <a name="applicationAccount" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.applicationAccount"></a>

```java
public java.lang.String getApplicationAccount();
```

- *Type:* java.lang.String

---

##### `applicationProviderArn`<sup>Required</sup> <a name="applicationProviderArn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.applicationProviderArn"></a>

```java
public java.lang.String getApplicationProviderArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `portalOptions`<sup>Required</sup> <a name="portalOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.portalOptions"></a>

```java
public DataAwsSsoadminApplicationPortalOptionsList getPortalOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList">DataAwsSsoadminApplicationPortalOptionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.applicationArnInput"></a>

```java
public java.lang.String getApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `portalOptionsInput`<sup>Optional</sup> <a name="portalOptionsInput" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.portalOptionsInput"></a>

```java
public java.lang.Object getPortalOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>>

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminApplicationConfig <a name="DataAwsSsoadminApplicationConfig" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplicationConfig;

DataAwsSsoadminApplicationConfig.builder()
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
    .applicationArn(java.lang.String)
//  .portalOptions(IResolvable)
//  .portalOptions(java.util.List<DataAwsSsoadminApplicationPortalOptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application#application_arn DataAwsSsoadminApplication#application_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.portalOptions">portalOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>></code> | portal_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application#application_arn DataAwsSsoadminApplication#application_arn}.

---

##### `portalOptions`<sup>Optional</sup> <a name="portalOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationConfig.property.portalOptions"></a>

```java
public java.lang.Object getPortalOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>>

portal_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application#portal_options DataAwsSsoadminApplication#portal_options}

---

### DataAwsSsoadminApplicationPortalOptions <a name="DataAwsSsoadminApplicationPortalOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplicationPortalOptions;

DataAwsSsoadminApplicationPortalOptions.builder()
//  .signInOptions(IResolvable)
//  .signInOptions(java.util.List<DataAwsSsoadminApplicationPortalOptionsSignInOptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions.property.signInOptions">signInOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a>></code> | sign_in_options block. |

---

##### `signInOptions`<sup>Optional</sup> <a name="signInOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions.property.signInOptions"></a>

```java
public java.lang.Object getSignInOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a>>

sign_in_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssoadmin_application#sign_in_options DataAwsSsoadminApplication#sign_in_options}

---

### DataAwsSsoadminApplicationPortalOptionsSignInOptions <a name="DataAwsSsoadminApplicationPortalOptionsSignInOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplicationPortalOptionsSignInOptions;

DataAwsSsoadminApplicationPortalOptionsSignInOptions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsoadminApplicationPortalOptionsList <a name="DataAwsSsoadminApplicationPortalOptionsList" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplicationPortalOptionsList;

new DataAwsSsoadminApplicationPortalOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.get"></a>

```java
public DataAwsSsoadminApplicationPortalOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>>

---


### DataAwsSsoadminApplicationPortalOptionsOutputReference <a name="DataAwsSsoadminApplicationPortalOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplicationPortalOptionsOutputReference;

new DataAwsSsoadminApplicationPortalOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.putSignInOptions">putSignInOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.resetSignInOptions">resetSignInOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignInOptions` <a name="putSignInOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.putSignInOptions"></a>

```java
public void putSignInOptions(IResolvable OR java.util.List<DataAwsSsoadminApplicationPortalOptionsSignInOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.putSignInOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a>>

---

##### `resetSignInOptions` <a name="resetSignInOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.resetSignInOptions"></a>

```java
public void resetSignInOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.signInOptions">signInOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList">DataAwsSsoadminApplicationPortalOptionsSignInOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.signInOptionsInput">signInOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signInOptions`<sup>Required</sup> <a name="signInOptions" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.signInOptions"></a>

```java
public DataAwsSsoadminApplicationPortalOptionsSignInOptionsList getSignInOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList">DataAwsSsoadminApplicationPortalOptionsSignInOptionsList</a>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `signInOptionsInput`<sup>Optional</sup> <a name="signInOptionsInput" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.signInOptionsInput"></a>

```java
public java.lang.Object getSignInOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptions">DataAwsSsoadminApplicationPortalOptions</a>

---


### DataAwsSsoadminApplicationPortalOptionsSignInOptionsList <a name="DataAwsSsoadminApplicationPortalOptionsSignInOptionsList" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList;

new DataAwsSsoadminApplicationPortalOptionsSignInOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.get"></a>

```java
public DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a>>

---


### DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference <a name="DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_application.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference;

new DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.applicationUrl">applicationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationUrl`<sup>Required</sup> <a name="applicationUrl" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.applicationUrl"></a>

```java
public java.lang.String getApplicationUrl();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsSsoadminApplication.DataAwsSsoadminApplicationPortalOptionsSignInOptions">DataAwsSsoadminApplicationPortalOptionsSignInOptions</a>

---



