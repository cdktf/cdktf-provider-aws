# `dataAwsEcrAuthorizationToken` Submodule <a name="`dataAwsEcrAuthorizationToken` Submodule" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrAuthorizationToken <a name="DataAwsEcrAuthorizationToken" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token aws_ecr_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecr_authorization_token.DataAwsEcrAuthorizationToken;

DataAwsEcrAuthorizationToken.Builder.create(Construct scope, java.lang.String id)
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
//  .region(java.lang.String)
//  .registryId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#id DataAwsEcrAuthorizationToken#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.registryId">registryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#registry_id DataAwsEcrAuthorizationToken#registry_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#id DataAwsEcrAuthorizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#region DataAwsEcrAuthorizationToken#region}

---

##### `registryId`<sup>Optional</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.registryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#registry_id DataAwsEcrAuthorizationToken#registry_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetRegistryId">resetRegistryId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRegistryId` <a name="resetRegistryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetRegistryId"></a>

```java
public void resetRegistryId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcrAuthorizationToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecr_authorization_token.DataAwsEcrAuthorizationToken;

DataAwsEcrAuthorizationToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecr_authorization_token.DataAwsEcrAuthorizationToken;

DataAwsEcrAuthorizationToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecr_authorization_token.DataAwsEcrAuthorizationToken;

DataAwsEcrAuthorizationToken.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecr_authorization_token.DataAwsEcrAuthorizationToken;

DataAwsEcrAuthorizationToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEcrAuthorizationToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsEcrAuthorizationToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEcrAuthorizationToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEcrAuthorizationToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcrAuthorizationToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.authorizationToken">authorizationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.proxyEndpoint">proxyEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryIdInput">registryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `authorizationToken`<sup>Required</sup> <a name="authorizationToken" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.authorizationToken"></a>

```java
public java.lang.String getAuthorizationToken();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `proxyEndpoint`<sup>Required</sup> <a name="proxyEndpoint" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.proxyEndpoint"></a>

```java
public java.lang.String getProxyEndpoint();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `registryIdInput`<sup>Optional</sup> <a name="registryIdInput" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryIdInput"></a>

```java
public java.lang.String getRegistryIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrAuthorizationTokenConfig <a name="DataAwsEcrAuthorizationTokenConfig" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecr_authorization_token.DataAwsEcrAuthorizationTokenConfig;

DataAwsEcrAuthorizationTokenConfig.builder()
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
//  .region(java.lang.String)
//  .registryId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#id DataAwsEcrAuthorizationToken#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.registryId">registryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#registry_id DataAwsEcrAuthorizationToken#registry_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#id DataAwsEcrAuthorizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#region DataAwsEcrAuthorizationToken#region}

---

##### `registryId`<sup>Optional</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ecr_authorization_token#registry_id DataAwsEcrAuthorizationToken#registry_id}.

---



