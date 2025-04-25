# `dataAwsVpcEndpointAssociations` Submodule <a name="`dataAwsVpcEndpointAssociations` Submodule" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcEndpointAssociations <a name="DataAwsVpcEndpointAssociations" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations aws_vpc_endpoint_associations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociations;

DataAwsVpcEndpointAssociations.Builder.create(Construct scope, java.lang.String id)
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
    .vpcEndpointId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations#vpc_endpoint_id DataAwsVpcEndpointAssociations#vpc_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.Initializer.parameter.vpcEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations#vpc_endpoint_id DataAwsVpcEndpointAssociations#vpc_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpcEndpointAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociations;

DataAwsVpcEndpointAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociations;

DataAwsVpcEndpointAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociations;

DataAwsVpcEndpointAssociations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociations;

DataAwsVpcEndpointAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsVpcEndpointAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsVpcEndpointAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsVpcEndpointAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsVpcEndpointAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpcEndpointAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.associations">associations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList">DataAwsVpcEndpointAssociationsAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.associations"></a>

```java
public DataAwsVpcEndpointAssociationsAssociationsList getAssociations();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList">DataAwsVpcEndpointAssociationsAssociationsList</a>

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcEndpointAssociationsAssociations <a name="DataAwsVpcEndpointAssociationsAssociations" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociations;

DataAwsVpcEndpointAssociationsAssociations.builder()
    .build();
```


### DataAwsVpcEndpointAssociationsAssociationsDnsEntry <a name="DataAwsVpcEndpointAssociationsAssociationsDnsEntry" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry;

DataAwsVpcEndpointAssociationsAssociationsDnsEntry.builder()
    .build();
```


### DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry <a name="DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry;

DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry.builder()
    .build();
```


### DataAwsVpcEndpointAssociationsConfig <a name="DataAwsVpcEndpointAssociationsConfig" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsConfig;

DataAwsVpcEndpointAssociationsConfig.builder()
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
    .vpcEndpointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations#vpc_endpoint_id DataAwsVpcEndpointAssociations#vpc_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsConfig.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/vpc_endpoint_associations#vpc_endpoint_id DataAwsVpcEndpointAssociations#vpc_endpoint_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcEndpointAssociationsAssociationsDnsEntryList <a name="DataAwsVpcEndpointAssociationsAssociationsDnsEntryList" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList;

new DataAwsVpcEndpointAssociationsAssociationsDnsEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.get"></a>

```java
public DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference <a name="DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference;

new DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry">DataAwsVpcEndpointAssociationsAssociationsDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference.property.internalValue"></a>

```java
public DataAwsVpcEndpointAssociationsAssociationsDnsEntry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntry">DataAwsVpcEndpointAssociationsAssociationsDnsEntry</a>

---


### DataAwsVpcEndpointAssociationsAssociationsList <a name="DataAwsVpcEndpointAssociationsAssociationsList" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociationsList;

new DataAwsVpcEndpointAssociationsAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.get"></a>

```java
public DataAwsVpcEndpointAssociationsAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpcEndpointAssociationsAssociationsOutputReference <a name="DataAwsVpcEndpointAssociationsAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociationsOutputReference;

new DataAwsVpcEndpointAssociationsAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.associatedResourceAccessibility">associatedResourceAccessibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.associatedResourceArn">associatedResourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList">DataAwsVpcEndpointAssociationsAssociationsDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.privateDnsEntry">privateDnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList">DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.resourceConfigurationGroupArn">resourceConfigurationGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.serviceNetworkName">serviceNetworkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations">DataAwsVpcEndpointAssociationsAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `associatedResourceAccessibility`<sup>Required</sup> <a name="associatedResourceAccessibility" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.associatedResourceAccessibility"></a>

```java
public java.lang.String getAssociatedResourceAccessibility();
```

- *Type:* java.lang.String

---

##### `associatedResourceArn`<sup>Required</sup> <a name="associatedResourceArn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.associatedResourceArn"></a>

```java
public java.lang.String getAssociatedResourceArn();
```

- *Type:* java.lang.String

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.dnsEntry"></a>

```java
public DataAwsVpcEndpointAssociationsAssociationsDnsEntryList getDnsEntry();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsDnsEntryList">DataAwsVpcEndpointAssociationsAssociationsDnsEntryList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateDnsEntry`<sup>Required</sup> <a name="privateDnsEntry" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.privateDnsEntry"></a>

```java
public DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList getPrivateDnsEntry();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList">DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList</a>

---

##### `resourceConfigurationGroupArn`<sup>Required</sup> <a name="resourceConfigurationGroupArn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.resourceConfigurationGroupArn"></a>

```java
public java.lang.String getResourceConfigurationGroupArn();
```

- *Type:* java.lang.String

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.serviceNetworkArn"></a>

```java
public java.lang.String getServiceNetworkArn();
```

- *Type:* java.lang.String

---

##### `serviceNetworkName`<sup>Required</sup> <a name="serviceNetworkName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.serviceNetworkName"></a>

```java
public java.lang.String getServiceNetworkName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsOutputReference.property.internalValue"></a>

```java
public DataAwsVpcEndpointAssociationsAssociations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociations">DataAwsVpcEndpointAssociationsAssociations</a>

---


### DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList <a name="DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList;

new DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.get"></a>

```java
public DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference <a name="DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_vpc_endpoint_associations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference;

new DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry">DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference.property.internalValue"></a>

```java
public DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcEndpointAssociations.DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry">DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry</a>

---



