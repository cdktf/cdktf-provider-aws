# `vpcEndpointSecurityGroupAssociation` Submodule <a name="`vpcEndpointSecurityGroupAssociation` Submodule" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointSecurityGroupAssociation <a name="VpcEndpointSecurityGroupAssociation" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association aws_vpc_endpoint_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_endpoint_security_group_association.VpcEndpointSecurityGroupAssociation;

VpcEndpointSecurityGroupAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .securityGroupId(java.lang.String)
    .vpcEndpointId(java.lang.String)
//  .id(java.lang.String)
//  .replaceDefaultAssociation(java.lang.Boolean)
//  .replaceDefaultAssociation(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#security_group_id VpcEndpointSecurityGroupAssociation#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#vpc_endpoint_id VpcEndpointSecurityGroupAssociation#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#id VpcEndpointSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.replaceDefaultAssociation">replaceDefaultAssociation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#replace_default_association VpcEndpointSecurityGroupAssociation#replace_default_association}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#security_group_id VpcEndpointSecurityGroupAssociation#security_group_id}.

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.vpcEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#vpc_endpoint_id VpcEndpointSecurityGroupAssociation#vpc_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#id VpcEndpointSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replaceDefaultAssociation`<sup>Optional</sup> <a name="replaceDefaultAssociation" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.Initializer.parameter.replaceDefaultAssociation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#replace_default_association VpcEndpointSecurityGroupAssociation#replace_default_association}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.resetReplaceDefaultAssociation">resetReplaceDefaultAssociation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetReplaceDefaultAssociation` <a name="resetReplaceDefaultAssociation" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.resetReplaceDefaultAssociation"></a>

```java
public void resetReplaceDefaultAssociation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_endpoint_security_group_association.VpcEndpointSecurityGroupAssociation;

VpcEndpointSecurityGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_endpoint_security_group_association.VpcEndpointSecurityGroupAssociation;

VpcEndpointSecurityGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_endpoint_security_group_association.VpcEndpointSecurityGroupAssociation;

VpcEndpointSecurityGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.replaceDefaultAssociationInput">replaceDefaultAssociationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.replaceDefaultAssociation">replaceDefaultAssociation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `replaceDefaultAssociationInput`<sup>Optional</sup> <a name="replaceDefaultAssociationInput" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.replaceDefaultAssociationInput"></a>

```java
public java.lang.Object getReplaceDefaultAssociationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `replaceDefaultAssociation`<sup>Required</sup> <a name="replaceDefaultAssociation" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.replaceDefaultAssociation"></a>

```java
public java.lang.Object getReplaceDefaultAssociation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointSecurityGroupAssociationConfig <a name="VpcEndpointSecurityGroupAssociationConfig" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpc_endpoint_security_group_association.VpcEndpointSecurityGroupAssociationConfig;

VpcEndpointSecurityGroupAssociationConfig.builder()
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
    .securityGroupId(java.lang.String)
    .vpcEndpointId(java.lang.String)
//  .id(java.lang.String)
//  .replaceDefaultAssociation(java.lang.Boolean)
//  .replaceDefaultAssociation(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#security_group_id VpcEndpointSecurityGroupAssociation#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#vpc_endpoint_id VpcEndpointSecurityGroupAssociation#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#id VpcEndpointSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.replaceDefaultAssociation">replaceDefaultAssociation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#replace_default_association VpcEndpointSecurityGroupAssociation#replace_default_association}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#security_group_id VpcEndpointSecurityGroupAssociation#security_group_id}.

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#vpc_endpoint_id VpcEndpointSecurityGroupAssociation#vpc_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#id VpcEndpointSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replaceDefaultAssociation`<sup>Optional</sup> <a name="replaceDefaultAssociation" id="@cdktf/provider-aws.vpcEndpointSecurityGroupAssociation.VpcEndpointSecurityGroupAssociationConfig.property.replaceDefaultAssociation"></a>

```java
public java.lang.Object getReplaceDefaultAssociation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#replace_default_association VpcEndpointSecurityGroupAssociation#replace_default_association}.

---



