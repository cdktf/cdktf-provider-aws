# `dataAwsRoute53Records` Submodule <a name="`dataAwsRoute53Records` Submodule" id="@cdktf/provider-aws.dataAwsRoute53Records"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53Records <a name="DataAwsRoute53Records" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records aws_route53_records}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53Records;

DataAwsRoute53Records.Builder.create(Construct scope, java.lang.String id)
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
    .zoneId(java.lang.String)
//  .nameRegex(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.Initializer.parameter.nameRegex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetNameRegex">resetNameRegex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.resetNameRegex"></a>

```java
public void resetNameRegex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRoute53Records resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53Records;

DataAwsRoute53Records.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53Records;

DataAwsRoute53Records.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53Records;

DataAwsRoute53Records.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53Records;

DataAwsRoute53Records.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsRoute53Records.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsRoute53Records resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsRoute53Records to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsRoute53Records that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53Records to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.resourceRecordSets">resourceRecordSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList">DataAwsRoute53RecordsResourceRecordSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegexInput">nameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `resourceRecordSets`<sup>Required</sup> <a name="resourceRecordSets" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.resourceRecordSets"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsList getResourceRecordSets();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList">DataAwsRoute53RecordsResourceRecordSetsList</a>

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegexInput"></a>

```java
public java.lang.String getNameRegexInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53Records.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53RecordsConfig <a name="DataAwsRoute53RecordsConfig" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsConfig;

DataAwsRoute53RecordsConfig.builder()
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
    .zoneId(java.lang.String)
//  .nameRegex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsConfig.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}.

---

### DataAwsRoute53RecordsResourceRecordSets <a name="DataAwsRoute53RecordsResourceRecordSets" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSets;

DataAwsRoute53RecordsResourceRecordSets.builder()
    .build();
```


### DataAwsRoute53RecordsResourceRecordSetsAliasTarget <a name="DataAwsRoute53RecordsResourceRecordSetsAliasTarget" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget;

DataAwsRoute53RecordsResourceRecordSetsAliasTarget.builder()
    .build();
```


### DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig <a name="DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig;

DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig.builder()
    .build();
```


### DataAwsRoute53RecordsResourceRecordSetsGeolocation <a name="DataAwsRoute53RecordsResourceRecordSetsGeolocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsGeolocation;

DataAwsRoute53RecordsResourceRecordSetsGeolocation.builder()
    .build();
```


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation;

DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation.builder()
    .build();
```


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates;

DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates.builder()
    .build();
```


### DataAwsRoute53RecordsResourceRecordSetsResourceRecords <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecords" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords;

DataAwsRoute53RecordsResourceRecordSetsResourceRecords.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference;

new DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget">DataAwsRoute53RecordsResourceRecordSetsAliasTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```java
public IResolvable getEvaluateTargetHealth();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference.property.internalValue"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsAliasTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTarget">DataAwsRoute53RecordsResourceRecordSetsAliasTarget</a>

---


### DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference;

new DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.locationName">locationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.locationName"></a>

```java
public java.lang.String getLocationName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference.property.internalValue"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference;

new DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.continentCode">continentCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.subdivisionCode">subdivisionCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation">DataAwsRoute53RecordsResourceRecordSetsGeolocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continentCode`<sup>Required</sup> <a name="continentCode" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.continentCode"></a>

```java
public java.lang.String getContinentCode();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `subdivisionCode`<sup>Required</sup> <a name="subdivisionCode" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.subdivisionCode"></a>

```java
public java.lang.String getSubdivisionCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference.property.internalValue"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsGeolocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocation">DataAwsRoute53RecordsResourceRecordSetsGeolocation</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference;

new DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.latitude">latitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.longitude">longitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.latitude"></a>

```java
public java.lang.String getLatitude();
```

- *Type:* java.lang.String

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.longitude"></a>

```java
public java.lang.String getLongitude();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference.property.internalValue"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates</a>

---


### DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference;

new DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.bias">bias</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.coordinates">coordinates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.localZoneGroup">localZoneGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `bias`<sup>Required</sup> <a name="bias" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.bias"></a>

```java
public java.lang.Number getBias();
```

- *Type:* java.lang.Number

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.coordinates"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference getCoordinates();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference</a>

---

##### `localZoneGroup`<sup>Required</sup> <a name="localZoneGroup" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.localZoneGroup"></a>

```java
public java.lang.String getLocalZoneGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference.property.internalValue"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation</a>

---


### DataAwsRoute53RecordsResourceRecordSetsList <a name="DataAwsRoute53RecordsResourceRecordSetsList" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsList;

new DataAwsRoute53RecordsResourceRecordSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsRoute53RecordsResourceRecordSetsOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsOutputReference;

new DataAwsRoute53RecordsResourceRecordSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.aliasTarget">aliasTarget</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference">DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.failover">failover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geolocation">geolocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geoproximityLocation">geoproximityLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.multiValueAnswer">multiValueAnswer</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.resourceRecords">resourceRecords</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList">DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.setIdentifier">setIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.trafficPolicyInstanceId">trafficPolicyInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets">DataAwsRoute53RecordsResourceRecordSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasTarget`<sup>Required</sup> <a name="aliasTarget" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.aliasTarget"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference getAliasTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference">DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference</a>

---

##### `cidrRoutingConfig`<sup>Required</sup> <a name="cidrRoutingConfig" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.cidrRoutingConfig"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference getCidrRoutingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference">DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference</a>

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.failover"></a>

```java
public java.lang.String getFailover();
```

- *Type:* java.lang.String

---

##### `geolocation`<sup>Required</sup> <a name="geolocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geolocation"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference getGeolocation();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference</a>

---

##### `geoproximityLocation`<sup>Required</sup> <a name="geoproximityLocation" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.geoproximityLocation"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference getGeoproximityLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference">DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference</a>

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.healthCheckId"></a>

```java
public java.lang.String getHealthCheckId();
```

- *Type:* java.lang.String

---

##### `multiValueAnswer`<sup>Required</sup> <a name="multiValueAnswer" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.multiValueAnswer"></a>

```java
public IResolvable getMultiValueAnswer();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceRecords`<sup>Required</sup> <a name="resourceRecords" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.resourceRecords"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList getResourceRecords();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList">DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList</a>

---

##### `setIdentifier`<sup>Required</sup> <a name="setIdentifier" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.setIdentifier"></a>

```java
public java.lang.String getSetIdentifier();
```

- *Type:* java.lang.String

---

##### `trafficPolicyInstanceId`<sup>Required</sup> <a name="trafficPolicyInstanceId" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.trafficPolicyInstanceId"></a>

```java
public java.lang.String getTrafficPolicyInstanceId();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsOutputReference.property.internalValue"></a>

```java
public DataAwsRoute53RecordsResourceRecordSets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSets">DataAwsRoute53RecordsResourceRecordSets</a>

---


### DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList;

new DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference <a name="DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference;

new DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords">DataAwsRoute53RecordsResourceRecordSetsResourceRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference.property.internalValue"></a>

```java
public DataAwsRoute53RecordsResourceRecordSetsResourceRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53Records.DataAwsRoute53RecordsResourceRecordSetsResourceRecords">DataAwsRoute53RecordsResourceRecordSetsResourceRecords</a>

---



