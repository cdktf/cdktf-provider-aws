# `cloudfrontOriginAccessControl` Submodule <a name="`cloudfrontOriginAccessControl` Submodule" id="@cdktf/provider-aws.cloudfrontOriginAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginAccessControl <a name="CloudfrontOriginAccessControl" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control aws_cloudfront_origin_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_access_control.CloudfrontOriginAccessControl;

CloudfrontOriginAccessControl.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .originAccessControlOriginType(java.lang.String)
    .signingBehavior(java.lang.String)
    .signingProtocol(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.originAccessControlOriginType">originAccessControlOriginType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.signingBehavior">signingBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.signingProtocol">signingProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#id CloudfrontOriginAccessControl#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}.

---

##### `originAccessControlOriginType`<sup>Required</sup> <a name="originAccessControlOriginType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.originAccessControlOriginType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}.

---

##### `signingBehavior`<sup>Required</sup> <a name="signingBehavior" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.signingBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}.

---

##### `signingProtocol`<sup>Required</sup> <a name="signingProtocol" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.signingProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#id CloudfrontOriginAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_access_control.CloudfrontOriginAccessControl;

CloudfrontOriginAccessControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_access_control.CloudfrontOriginAccessControl;

CloudfrontOriginAccessControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_access_control.CloudfrontOriginAccessControl;

CloudfrontOriginAccessControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlOriginTypeInput">originAccessControlOriginTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingBehaviorInput">signingBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingProtocolInput">signingProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlOriginType">originAccessControlOriginType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingBehavior">signingBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingProtocol">signingProtocol</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `originAccessControlOriginTypeInput`<sup>Optional</sup> <a name="originAccessControlOriginTypeInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlOriginTypeInput"></a>

```java
public java.lang.String getOriginAccessControlOriginTypeInput();
```

- *Type:* java.lang.String

---

##### `signingBehaviorInput`<sup>Optional</sup> <a name="signingBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingBehaviorInput"></a>

```java
public java.lang.String getSigningBehaviorInput();
```

- *Type:* java.lang.String

---

##### `signingProtocolInput`<sup>Optional</sup> <a name="signingProtocolInput" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingProtocolInput"></a>

```java
public java.lang.String getSigningProtocolInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `originAccessControlOriginType`<sup>Required</sup> <a name="originAccessControlOriginType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlOriginType"></a>

```java
public java.lang.String getOriginAccessControlOriginType();
```

- *Type:* java.lang.String

---

##### `signingBehavior`<sup>Required</sup> <a name="signingBehavior" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingBehavior"></a>

```java
public java.lang.String getSigningBehavior();
```

- *Type:* java.lang.String

---

##### `signingProtocol`<sup>Required</sup> <a name="signingProtocol" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.signingProtocol"></a>

```java
public java.lang.String getSigningProtocol();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginAccessControlConfig <a name="CloudfrontOriginAccessControlConfig" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_access_control.CloudfrontOriginAccessControlConfig;

CloudfrontOriginAccessControlConfig.builder()
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
    .name(java.lang.String)
    .originAccessControlOriginType(java.lang.String)
    .signingBehavior(java.lang.String)
    .signingProtocol(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlOriginType">originAccessControlOriginType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.signingBehavior">signingBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.signingProtocol">signingProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#id CloudfrontOriginAccessControl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}.

---

##### `originAccessControlOriginType`<sup>Required</sup> <a name="originAccessControlOriginType" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlOriginType"></a>

```java
public java.lang.String getOriginAccessControlOriginType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}.

---

##### `signingBehavior`<sup>Required</sup> <a name="signingBehavior" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.signingBehavior"></a>

```java
public java.lang.String getSigningBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}.

---

##### `signingProtocol`<sup>Required</sup> <a name="signingProtocol" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.signingProtocol"></a>

```java
public java.lang.String getSigningProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_control#id CloudfrontOriginAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



