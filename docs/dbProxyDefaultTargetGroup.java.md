# `dbProxyDefaultTargetGroup` Submodule <a name="`dbProxyDefaultTargetGroup` Submodule" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbProxyDefaultTargetGroup <a name="DbProxyDefaultTargetGroup" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group aws_db_proxy_default_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroup;

DbProxyDefaultTargetGroup.Builder.create(Construct scope, java.lang.String id)
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
    .dbProxyName(java.lang.String)
//  .connectionPoolConfig(DbProxyDefaultTargetGroupConnectionPoolConfig)
//  .id(java.lang.String)
//  .timeouts(DbProxyDefaultTargetGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.connectionPoolConfig">connectionPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | connection_pool_config block. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.dbProxyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}.

---

##### `connectionPoolConfig`<sup>Optional</sup> <a name="connectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.connectionPoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

connection_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig">putConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetConnectionPoolConfig">resetConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConnectionPoolConfig` <a name="putConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig"></a>

```java
public void putConnectionPoolConfig(DbProxyDefaultTargetGroupConnectionPoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts"></a>

```java
public void putTimeouts(DbProxyDefaultTargetGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

---

##### `resetConnectionPoolConfig` <a name="resetConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetConnectionPoolConfig"></a>

```java
public void resetConnectionPoolConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroup;

DbProxyDefaultTargetGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroup;

DbProxyDefaultTargetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroup;

DbProxyDefaultTargetGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfig">connectionPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference">DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference">DbProxyDefaultTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfigInput">connectionPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyNameInput">dbProxyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `connectionPoolConfig`<sup>Required</sup> <a name="connectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfig"></a>

```java
public DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference getConnectionPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference">DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeouts"></a>

```java
public DbProxyDefaultTargetGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference">DbProxyDefaultTargetGroupTimeoutsOutputReference</a>

---

##### `connectionPoolConfigInput`<sup>Optional</sup> <a name="connectionPoolConfigInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfigInput"></a>

```java
public DbProxyDefaultTargetGroupConnectionPoolConfig getConnectionPoolConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---

##### `dbProxyNameInput`<sup>Optional</sup> <a name="dbProxyNameInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyNameInput"></a>

```java
public java.lang.String getDbProxyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyName"></a>

```java
public java.lang.String getDbProxyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DbProxyDefaultTargetGroupConfig <a name="DbProxyDefaultTargetGroupConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroupConfig;

DbProxyDefaultTargetGroupConfig.builder()
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
    .dbProxyName(java.lang.String)
//  .connectionPoolConfig(DbProxyDefaultTargetGroupConnectionPoolConfig)
//  .id(java.lang.String)
//  .timeouts(DbProxyDefaultTargetGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dbProxyName">dbProxyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connectionPoolConfig">connectionPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | connection_pool_config block. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dbProxyName"></a>

```java
public java.lang.String getDbProxyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}.

---

##### `connectionPoolConfig`<sup>Optional</sup> <a name="connectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connectionPoolConfig"></a>

```java
public DbProxyDefaultTargetGroupConnectionPoolConfig getConnectionPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

connection_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.timeouts"></a>

```java
public DbProxyDefaultTargetGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}

---

### DbProxyDefaultTargetGroupConnectionPoolConfig <a name="DbProxyDefaultTargetGroupConnectionPoolConfig" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroupConnectionPoolConfig;

DbProxyDefaultTargetGroupConnectionPoolConfig.builder()
//  .connectionBorrowTimeout(java.lang.Number)
//  .initQuery(java.lang.String)
//  .maxConnectionsPercent(java.lang.Number)
//  .maxIdleConnectionsPercent(java.lang.Number)
//  .sessionPinningFilters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.initQuery">initQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}. |

---

##### `connectionBorrowTimeout`<sup>Optional</sup> <a name="connectionBorrowTimeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.connectionBorrowTimeout"></a>

```java
public java.lang.Number getConnectionBorrowTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}.

---

##### `initQuery`<sup>Optional</sup> <a name="initQuery" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.initQuery"></a>

```java
public java.lang.String getInitQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}.

---

##### `maxConnectionsPercent`<sup>Optional</sup> <a name="maxConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxConnectionsPercent"></a>

```java
public java.lang.Number getMaxConnectionsPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}.

---

##### `maxIdleConnectionsPercent`<sup>Optional</sup> <a name="maxIdleConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxIdleConnectionsPercent"></a>

```java
public java.lang.Number getMaxIdleConnectionsPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}.

---

##### `sessionPinningFilters`<sup>Optional</sup> <a name="sessionPinningFilters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.sessionPinningFilters"></a>

```java
public java.util.List<java.lang.String> getSessionPinningFilters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}.

---

### DbProxyDefaultTargetGroupTimeouts <a name="DbProxyDefaultTargetGroupTimeouts" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroupTimeouts;

DbProxyDefaultTargetGroupTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference <a name="DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference;

new DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetConnectionBorrowTimeout">resetConnectionBorrowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetInitQuery">resetInitQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxConnectionsPercent">resetMaxConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxIdleConnectionsPercent">resetMaxIdleConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetSessionPinningFilters">resetSessionPinningFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionBorrowTimeout` <a name="resetConnectionBorrowTimeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetConnectionBorrowTimeout"></a>

```java
public void resetConnectionBorrowTimeout()
```

##### `resetInitQuery` <a name="resetInitQuery" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetInitQuery"></a>

```java
public void resetInitQuery()
```

##### `resetMaxConnectionsPercent` <a name="resetMaxConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxConnectionsPercent"></a>

```java
public void resetMaxConnectionsPercent()
```

##### `resetMaxIdleConnectionsPercent` <a name="resetMaxIdleConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxIdleConnectionsPercent"></a>

```java
public void resetMaxIdleConnectionsPercent()
```

##### `resetSessionPinningFilters` <a name="resetSessionPinningFilters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetSessionPinningFilters"></a>

```java
public void resetSessionPinningFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeoutInput">connectionBorrowTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQueryInput">initQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercentInput">maxConnectionsPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercentInput">maxIdleConnectionsPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFiltersInput">sessionPinningFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQuery">initQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionBorrowTimeoutInput`<sup>Optional</sup> <a name="connectionBorrowTimeoutInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeoutInput"></a>

```java
public java.lang.Number getConnectionBorrowTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `initQueryInput`<sup>Optional</sup> <a name="initQueryInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQueryInput"></a>

```java
public java.lang.String getInitQueryInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionsPercentInput`<sup>Optional</sup> <a name="maxConnectionsPercentInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercentInput"></a>

```java
public java.lang.Number getMaxConnectionsPercentInput();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsPercentInput`<sup>Optional</sup> <a name="maxIdleConnectionsPercentInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercentInput"></a>

```java
public java.lang.Number getMaxIdleConnectionsPercentInput();
```

- *Type:* java.lang.Number

---

##### `sessionPinningFiltersInput`<sup>Optional</sup> <a name="sessionPinningFiltersInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFiltersInput"></a>

```java
public java.util.List<java.lang.String> getSessionPinningFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionBorrowTimeout`<sup>Required</sup> <a name="connectionBorrowTimeout" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeout"></a>

```java
public java.lang.Number getConnectionBorrowTimeout();
```

- *Type:* java.lang.Number

---

##### `initQuery`<sup>Required</sup> <a name="initQuery" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQuery"></a>

```java
public java.lang.String getInitQuery();
```

- *Type:* java.lang.String

---

##### `maxConnectionsPercent`<sup>Required</sup> <a name="maxConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercent"></a>

```java
public java.lang.Number getMaxConnectionsPercent();
```

- *Type:* java.lang.Number

---

##### `maxIdleConnectionsPercent`<sup>Required</sup> <a name="maxIdleConnectionsPercent" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercent"></a>

```java
public java.lang.Number getMaxIdleConnectionsPercent();
```

- *Type:* java.lang.Number

---

##### `sessionPinningFilters`<sup>Required</sup> <a name="sessionPinningFilters" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFilters"></a>

```java
public java.util.List<java.lang.String> getSessionPinningFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.internalValue"></a>

```java
public DbProxyDefaultTargetGroupConnectionPoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---


### DbProxyDefaultTargetGroupTimeoutsOutputReference <a name="DbProxyDefaultTargetGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_proxy_default_target_group.DbProxyDefaultTargetGroupTimeoutsOutputReference;

new DbProxyDefaultTargetGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



