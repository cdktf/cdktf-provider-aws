# `route53VpcAssociationAuthorization` Submodule <a name="`route53VpcAssociationAuthorization` Submodule" id="@cdktf/provider-aws.route53VpcAssociationAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53VpcAssociationAuthorization <a name="Route53VpcAssociationAuthorization" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization aws_route53_vpc_association_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_vpc_association_authorization.Route53VpcAssociationAuthorization;

Route53VpcAssociationAuthorization.Builder.create(Construct scope, java.lang.String id)
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
    .vpcId(java.lang.String)
    .zoneId(java.lang.String)
//  .id(java.lang.String)
//  .vpcRegion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.vpcRegion">vpcRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpcRegion`<sup>Optional</sup> <a name="vpcRegion" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.Initializer.parameter.vpcRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetVpcRegion">resetVpcRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetId"></a>

```java
public void resetId()
```

##### `resetVpcRegion` <a name="resetVpcRegion" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.resetVpcRegion"></a>

```java
public void resetVpcRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_vpc_association_authorization.Route53VpcAssociationAuthorization;

Route53VpcAssociationAuthorization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_vpc_association_authorization.Route53VpcAssociationAuthorization;

Route53VpcAssociationAuthorization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_vpc_association_authorization.Route53VpcAssociationAuthorization;

Route53VpcAssociationAuthorization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegionInput">vpcRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegion">vpcRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcRegionInput`<sup>Optional</sup> <a name="vpcRegionInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegionInput"></a>

```java
public java.lang.String getVpcRegionInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpcRegion`<sup>Required</sup> <a name="vpcRegion" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.vpcRegion"></a>

```java
public java.lang.String getVpcRegion();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53VpcAssociationAuthorizationConfig <a name="Route53VpcAssociationAuthorizationConfig" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_vpc_association_authorization.Route53VpcAssociationAuthorizationConfig;

Route53VpcAssociationAuthorizationConfig.builder()
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
    .vpcId(java.lang.String)
    .zoneId(java.lang.String)
//  .id(java.lang.String)
//  .vpcRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcRegion">vpcRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#vpc_id Route53VpcAssociationAuthorization#vpc_id}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#zone_id Route53VpcAssociationAuthorization#zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#id Route53VpcAssociationAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpcRegion`<sup>Optional</sup> <a name="vpcRegion" id="@cdktf/provider-aws.route53VpcAssociationAuthorization.Route53VpcAssociationAuthorizationConfig.property.vpcRegion"></a>

```java
public java.lang.String getVpcRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization#vpc_region Route53VpcAssociationAuthorization#vpc_region}.

---



