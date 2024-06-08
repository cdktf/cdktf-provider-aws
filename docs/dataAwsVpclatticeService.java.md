# `dataAwsVpclatticeService` Submodule <a name="`dataAwsVpclatticeService` Submodule" id="@cdktf/provider-aws.dataAwsVpclatticeService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpclatticeService <a name="DataAwsVpclatticeService" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service aws_vpclattice_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeService;

DataAwsVpclatticeService.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .serviceIdentifier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#id DataAwsVpclatticeService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#name DataAwsVpclatticeService#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#service_identifier DataAwsVpclatticeService#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#tags DataAwsVpclatticeService#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#id DataAwsVpclatticeService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#name DataAwsVpclatticeService#name}.

---

##### `serviceIdentifier`<sup>Optional</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.serviceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#service_identifier DataAwsVpclatticeService#service_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#tags DataAwsVpclatticeService#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetServiceIdentifier">resetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetName"></a>

```java
public void resetName()
```

##### `resetServiceIdentifier` <a name="resetServiceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetServiceIdentifier"></a>

```java
public void resetServiceIdentifier()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpclatticeService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeService;

DataAwsVpclatticeService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeService;

DataAwsVpclatticeService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeService;

DataAwsVpclatticeService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeService;

DataAwsVpclatticeService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsVpclatticeService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsVpclatticeService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsVpclatticeService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsVpclatticeService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpclatticeService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.customDomainName">customDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList">DataAwsVpclatticeServiceDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `customDomainName`<sup>Required</sup> <a name="customDomainName" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.customDomainName"></a>

```java
public java.lang.String getCustomDomainName();
```

- *Type:* java.lang.String

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.dnsEntry"></a>

```java
public DataAwsVpclatticeServiceDnsEntryList getDnsEntry();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList">DataAwsVpclatticeServiceDnsEntryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.serviceIdentifierInput"></a>

```java
public java.lang.String getServiceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.serviceIdentifier"></a>

```java
public java.lang.String getServiceIdentifier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpclatticeServiceConfig <a name="DataAwsVpclatticeServiceConfig" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeServiceConfig;

DataAwsVpclatticeServiceConfig.builder()
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .serviceIdentifier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#id DataAwsVpclatticeService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#name DataAwsVpclatticeService#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#service_identifier DataAwsVpclatticeService#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#tags DataAwsVpclatticeService#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#id DataAwsVpclatticeService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#name DataAwsVpclatticeService#name}.

---

##### `serviceIdentifier`<sup>Optional</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.serviceIdentifier"></a>

```java
public java.lang.String getServiceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#service_identifier DataAwsVpclatticeService#service_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/data-sources/vpclattice_service#tags DataAwsVpclatticeService#tags}.

---

### DataAwsVpclatticeServiceDnsEntry <a name="DataAwsVpclatticeServiceDnsEntry" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeServiceDnsEntry;

DataAwsVpclatticeServiceDnsEntry.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpclatticeServiceDnsEntryList <a name="DataAwsVpclatticeServiceDnsEntryList" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeServiceDnsEntryList;

new DataAwsVpclatticeServiceDnsEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.get"></a>

```java
public DataAwsVpclatticeServiceDnsEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpclatticeServiceDnsEntryOutputReference <a name="DataAwsVpclatticeServiceDnsEntryOutputReference" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpclattice_service.DataAwsVpclatticeServiceDnsEntryOutputReference;

new DataAwsVpclatticeServiceDnsEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntry">DataAwsVpclatticeServiceDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntryOutputReference.property.internalValue"></a>

```java
public DataAwsVpclatticeServiceDnsEntry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeService.DataAwsVpclatticeServiceDnsEntry">DataAwsVpclatticeServiceDnsEntry</a>

---



