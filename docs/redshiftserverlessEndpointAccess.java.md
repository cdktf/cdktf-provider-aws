# `redshiftserverlessEndpointAccess` Submodule <a name="`redshiftserverlessEndpointAccess` Submodule" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessEndpointAccess <a name="RedshiftserverlessEndpointAccess" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access aws_redshiftserverless_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccess;

RedshiftserverlessEndpointAccess.Builder.create(Construct scope, java.lang.String id)
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
    .endpointName(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
    .workgroupName(java.lang.String)
//  .id(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}.

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.workgroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetId"></a>

```java
public void resetId()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccess;

RedshiftserverlessEndpointAccess.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccess;

RedshiftserverlessEndpointAccess.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccess;

RedshiftserverlessEndpointAccess.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcEndpoint">vpcEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList">RedshiftserverlessEndpointAccessVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupNameInput">workgroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `vpcEndpoint`<sup>Required</sup> <a name="vpcEndpoint" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcEndpoint"></a>

```java
public RedshiftserverlessEndpointAccessVpcEndpointList getVpcEndpoint();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList">RedshiftserverlessEndpointAccessVpcEndpointList</a>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupNameInput"></a>

```java
public java.lang.String getWorkgroupNameInput();
```

- *Type:* java.lang.String

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessEndpointAccessConfig <a name="RedshiftserverlessEndpointAccessConfig" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccessConfig;

RedshiftserverlessEndpointAccessConfig.builder()
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
    .endpointName(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
    .workgroupName(java.lang.String)
//  .id(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}.

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}.

---

### RedshiftserverlessEndpointAccessVpcEndpoint <a name="RedshiftserverlessEndpointAccessVpcEndpoint" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccessVpcEndpoint;

RedshiftserverlessEndpointAccessVpcEndpoint.builder()
    .build();
```


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface;

RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessEndpointAccessVpcEndpointList <a name="RedshiftserverlessEndpointAccessVpcEndpointList" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccessVpcEndpointList;

new RedshiftserverlessEndpointAccessVpcEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get"></a>

```java
public RedshiftserverlessEndpointAccessVpcEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList;

new RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get"></a>

```java
public RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference;

new RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface</a>

---


### RedshiftserverlessEndpointAccessVpcEndpointOutputReference <a name="RedshiftserverlessEndpointAccessVpcEndpointOutputReference" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshiftserverless_endpoint_access.RedshiftserverlessEndpointAccessVpcEndpointOutputReference;

new RedshiftserverlessEndpointAccessVpcEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint">RedshiftserverlessEndpointAccessVpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.networkInterface"></a>

```java
public RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.internalValue"></a>

```java
public RedshiftserverlessEndpointAccessVpcEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint">RedshiftserverlessEndpointAccessVpcEndpoint</a>

---



