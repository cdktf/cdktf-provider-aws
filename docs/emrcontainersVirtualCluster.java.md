# `emrcontainersVirtualCluster` Submodule <a name="`emrcontainersVirtualCluster` Submodule" id="@cdktf/provider-aws.emrcontainersVirtualCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrcontainersVirtualCluster <a name="EmrcontainersVirtualCluster" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualCluster;

EmrcontainersVirtualCluster.Builder.create(Construct scope, java.lang.String id)
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
    .containerProvider(EmrcontainersVirtualClusterContainerProvider)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EmrcontainersVirtualClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.containerProvider">containerProvider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | container_provider block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerProvider`<sup>Required</sup> <a name="containerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.containerProvider"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

container_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#container_provider EmrcontainersVirtualCluster#container_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#timeouts EmrcontainersVirtualCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider">putContainerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putContainerProvider` <a name="putContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider"></a>

```java
public void putContainerProvider(EmrcontainersVirtualClusterContainerProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putContainerProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts"></a>

```java
public void putTimeouts(EmrcontainersVirtualClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualCluster;

EmrcontainersVirtualCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualCluster;

EmrcontainersVirtualCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualCluster;

EmrcontainersVirtualCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProvider">containerProvider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference">EmrcontainersVirtualClusterContainerProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference">EmrcontainersVirtualClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProviderInput">containerProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `containerProvider`<sup>Required</sup> <a name="containerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProvider"></a>

```java
public EmrcontainersVirtualClusterContainerProviderOutputReference getContainerProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference">EmrcontainersVirtualClusterContainerProviderOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeouts"></a>

```java
public EmrcontainersVirtualClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference">EmrcontainersVirtualClusterTimeoutsOutputReference</a>

---

##### `containerProviderInput`<sup>Optional</sup> <a name="containerProviderInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.containerProviderInput"></a>

```java
public EmrcontainersVirtualClusterContainerProvider getContainerProviderInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrcontainersVirtualClusterConfig <a name="EmrcontainersVirtualClusterConfig" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterConfig;

EmrcontainersVirtualClusterConfig.builder()
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
    .containerProvider(EmrcontainersVirtualClusterContainerProvider)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EmrcontainersVirtualClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.containerProvider">containerProvider</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | container_provider block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerProvider`<sup>Required</sup> <a name="containerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.containerProvider"></a>

```java
public EmrcontainersVirtualClusterContainerProvider getContainerProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

container_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#container_provider EmrcontainersVirtualCluster#container_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterConfig.property.timeouts"></a>

```java
public EmrcontainersVirtualClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#timeouts EmrcontainersVirtualCluster#timeouts}

---

### EmrcontainersVirtualClusterContainerProvider <a name="EmrcontainersVirtualClusterContainerProvider" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterContainerProvider;

EmrcontainersVirtualClusterContainerProvider.builder()
    .id(java.lang.String)
    .info(EmrcontainersVirtualClusterContainerProviderInfo)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.info">info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | info block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.info"></a>

```java
public EmrcontainersVirtualClusterContainerProviderInfo getInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#info EmrcontainersVirtualCluster#info}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}.

---

### EmrcontainersVirtualClusterContainerProviderInfo <a name="EmrcontainersVirtualClusterContainerProviderInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterContainerProviderInfo;

EmrcontainersVirtualClusterContainerProviderInfo.builder()
    .eksInfo(EmrcontainersVirtualClusterContainerProviderInfoEksInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.property.eksInfo">eksInfo</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | eks_info block. |

---

##### `eksInfo`<sup>Required</sup> <a name="eksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo.property.eksInfo"></a>

```java
public EmrcontainersVirtualClusterContainerProviderInfoEksInfo getEksInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

eks_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#eks_info EmrcontainersVirtualCluster#eks_info}

---

### EmrcontainersVirtualClusterContainerProviderInfoEksInfo <a name="EmrcontainersVirtualClusterContainerProviderInfoEksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo;

EmrcontainersVirtualClusterContainerProviderInfoEksInfo.builder()
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}.

---

### EmrcontainersVirtualClusterTimeouts <a name="EmrcontainersVirtualClusterTimeouts" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterTimeouts;

EmrcontainersVirtualClusterTimeouts.builder()
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference <a name="EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference;

new EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue"></a>

```java
public EmrcontainersVirtualClusterContainerProviderInfoEksInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


### EmrcontainersVirtualClusterContainerProviderInfoOutputReference <a name="EmrcontainersVirtualClusterContainerProviderInfoOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference;

new EmrcontainersVirtualClusterContainerProviderInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo">putEksInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEksInfo` <a name="putEksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo"></a>

```java
public void putEksInfo(EmrcontainersVirtualClusterContainerProviderInfoEksInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.putEksInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo">eksInfo</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfoInput">eksInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eksInfo`<sup>Required</sup> <a name="eksInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo"></a>

```java
public EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference getEksInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference</a>

---

##### `eksInfoInput`<sup>Optional</sup> <a name="eksInfoInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfoInput"></a>

```java
public EmrcontainersVirtualClusterContainerProviderInfoEksInfo getEksInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoEksInfo">EmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue"></a>

```java
public EmrcontainersVirtualClusterContainerProviderInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---


### EmrcontainersVirtualClusterContainerProviderOutputReference <a name="EmrcontainersVirtualClusterContainerProviderOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterContainerProviderOutputReference;

new EmrcontainersVirtualClusterContainerProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo">putInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfo` <a name="putInfo" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo"></a>

```java
public void putInfo(EmrcontainersVirtualClusterContainerProviderInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.putInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.info">info</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.infoInput">infoInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.info"></a>

```java
public EmrcontainersVirtualClusterContainerProviderInfoOutputReference getInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfoOutputReference">EmrcontainersVirtualClusterContainerProviderInfoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `infoInput`<sup>Optional</sup> <a name="infoInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.infoInput"></a>

```java
public EmrcontainersVirtualClusterContainerProviderInfo getInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderInfo">EmrcontainersVirtualClusterContainerProviderInfo</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue"></a>

```java
public EmrcontainersVirtualClusterContainerProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterContainerProvider">EmrcontainersVirtualClusterContainerProvider</a>

---


### EmrcontainersVirtualClusterTimeoutsOutputReference <a name="EmrcontainersVirtualClusterTimeoutsOutputReference" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_virtual_cluster.EmrcontainersVirtualClusterTimeoutsOutputReference;

new EmrcontainersVirtualClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersVirtualCluster.EmrcontainersVirtualClusterTimeouts">EmrcontainersVirtualClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



