# `sesv2DedicatedIpPool` Submodule <a name="`sesv2DedicatedIpPool` Submodule" id="@cdktf/provider-aws.sesv2DedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2DedicatedIpPool <a name="Sesv2DedicatedIpPool" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_dedicated_ip_pool.Sesv2DedicatedIpPool;

Sesv2DedicatedIpPool.Builder.create(Construct scope, java.lang.String id)
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
    .poolName(java.lang.String)
//  .id(java.lang.String)
//  .scalingMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Sesv2DedicatedIpPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.poolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scalingMode`<sup>Optional</sup> <a name="scalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scalingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#timeouts Sesv2DedicatedIpPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode">resetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts"></a>

```java
public void putTimeouts(Sesv2DedicatedIpPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId"></a>

```java
public void resetId()
```

##### `resetScalingMode` <a name="resetScalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode"></a>

```java
public void resetScalingMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_dedicated_ip_pool.Sesv2DedicatedIpPool;

Sesv2DedicatedIpPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_dedicated_ip_pool.Sesv2DedicatedIpPool;

Sesv2DedicatedIpPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_dedicated_ip_pool.Sesv2DedicatedIpPool;

Sesv2DedicatedIpPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference">Sesv2DedicatedIpPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput">poolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput">scalingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName">poolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeouts"></a>

```java
public Sesv2DedicatedIpPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference">Sesv2DedicatedIpPoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput"></a>

```java
public java.lang.String getPoolNameInput();
```

- *Type:* java.lang.String

---

##### `scalingModeInput`<sup>Optional</sup> <a name="scalingModeInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput"></a>

```java
public java.lang.String getScalingModeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode"></a>

```java
public java.lang.String getScalingMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2DedicatedIpPoolConfig <a name="Sesv2DedicatedIpPoolConfig" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_dedicated_ip_pool.Sesv2DedicatedIpPoolConfig;

Sesv2DedicatedIpPoolConfig.builder()
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
    .poolName(java.lang.String)
//  .id(java.lang.String)
//  .scalingMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Sesv2DedicatedIpPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scalingMode`<sup>Optional</sup> <a name="scalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode"></a>

```java
public java.lang.String getScalingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.timeouts"></a>

```java
public Sesv2DedicatedIpPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#timeouts Sesv2DedicatedIpPool#timeouts}

---

### Sesv2DedicatedIpPoolTimeouts <a name="Sesv2DedicatedIpPoolTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_dedicated_ip_pool.Sesv2DedicatedIpPoolTimeouts;

Sesv2DedicatedIpPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#create Sesv2DedicatedIpPool#create}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#delete Sesv2DedicatedIpPool#delete}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#update Sesv2DedicatedIpPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#create Sesv2DedicatedIpPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#delete Sesv2DedicatedIpPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#update Sesv2DedicatedIpPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2DedicatedIpPoolTimeoutsOutputReference <a name="Sesv2DedicatedIpPoolTimeoutsOutputReference" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_dedicated_ip_pool.Sesv2DedicatedIpPoolTimeoutsOutputReference;

new Sesv2DedicatedIpPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



