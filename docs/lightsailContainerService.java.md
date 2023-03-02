# `lightsailContainerService` Submodule <a name="`lightsailContainerService` Submodule" id="@cdktf/provider-aws.lightsailContainerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainerService <a name="LightsailContainerService" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service aws_lightsail_container_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerService;

LightsailContainerService.Builder.create(Construct scope, java.lang.String id)
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
    .power(java.lang.String)
    .scale(java.lang.Number)
//  .id(java.lang.String)
//  .isDisabled(java.lang.Boolean)
//  .isDisabled(IResolvable)
//  .privateRegistryAccess(LightsailContainerServicePrivateRegistryAccess)
//  .publicDomainNames(LightsailContainerServicePublicDomainNames)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LightsailContainerServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.power">power</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scale">scale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.privateRegistryAccess">privateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | private_registry_access block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.publicDomainNames">publicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | public_domain_names block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}.

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.power"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}.

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scale"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.isDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}.

---

##### `privateRegistryAccess`<sup>Optional</sup> <a name="privateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.privateRegistryAccess"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

private_registry_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}

---

##### `publicDomainNames`<sup>Optional</sup> <a name="publicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.publicDomainNames"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

public_domain_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#timeouts LightsailContainerService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess">putPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames">putPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess">resetPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames">resetPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPrivateRegistryAccess` <a name="putPrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess"></a>

```java
public void putPrivateRegistryAccess(LightsailContainerServicePrivateRegistryAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `putPublicDomainNames` <a name="putPublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames"></a>

```java
public void putPublicDomainNames(LightsailContainerServicePublicDomainNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts"></a>

```java
public void putTimeouts(LightsailContainerServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId"></a>

```java
public void resetId()
```

##### `resetIsDisabled` <a name="resetIsDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled"></a>

```java
public void resetIsDisabled()
```

##### `resetPrivateRegistryAccess` <a name="resetPrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess"></a>

```java
public void resetPrivateRegistryAccess()
```

##### `resetPublicDomainNames` <a name="resetPublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames"></a>

```java
public void resetPublicDomainNames()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerService;

LightsailContainerService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerService;

LightsailContainerService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerService;

LightsailContainerService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId">powerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn">principalArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName">privateDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess">privateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames">publicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput">isDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput">powerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput">privateRegistryAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput">publicDomainNamesInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput">scaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power">power</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale">scale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `powerId`<sup>Required</sup> <a name="powerId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId"></a>

```java
public java.lang.String getPowerId();
```

- *Type:* java.lang.String

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn"></a>

```java
public java.lang.String getPrincipalArn();
```

- *Type:* java.lang.String

---

##### `privateDomainName`<sup>Required</sup> <a name="privateDomainName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName"></a>

```java
public java.lang.String getPrivateDomainName();
```

- *Type:* java.lang.String

---

##### `privateRegistryAccess`<sup>Required</sup> <a name="privateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess"></a>

```java
public LightsailContainerServicePrivateRegistryAccessOutputReference getPrivateRegistryAccess();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a>

---

##### `publicDomainNames`<sup>Required</sup> <a name="publicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames"></a>

```java
public LightsailContainerServicePublicDomainNamesOutputReference getPublicDomainNames();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts"></a>

```java
public LightsailContainerServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput"></a>

```java
public java.lang.Object getIsDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `powerInput`<sup>Optional</sup> <a name="powerInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput"></a>

```java
public java.lang.String getPowerInput();
```

- *Type:* java.lang.String

---

##### `privateRegistryAccessInput`<sup>Optional</sup> <a name="privateRegistryAccessInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput"></a>

```java
public LightsailContainerServicePrivateRegistryAccess getPrivateRegistryAccessInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `publicDomainNamesInput`<sup>Optional</sup> <a name="publicDomainNamesInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput"></a>

```java
public LightsailContainerServicePublicDomainNames getPublicDomainNamesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput"></a>

```java
public java.lang.Number getScaleInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled"></a>

```java
public java.lang.Object getIsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power"></a>

```java
public java.lang.String getPower();
```

- *Type:* java.lang.String

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale"></a>

```java
public java.lang.Number getScale();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerServiceConfig <a name="LightsailContainerServiceConfig" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServiceConfig;

LightsailContainerServiceConfig.builder()
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
    .power(java.lang.String)
    .scale(java.lang.Number)
//  .id(java.lang.String)
//  .isDisabled(java.lang.Boolean)
//  .isDisabled(IResolvable)
//  .privateRegistryAccess(LightsailContainerServicePrivateRegistryAccess)
//  .publicDomainNames(LightsailContainerServicePublicDomainNames)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LightsailContainerServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power">power</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale">scale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled">isDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess">privateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | private_registry_access block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames">publicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | public_domain_names block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}.

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power"></a>

```java
public java.lang.String getPower();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}.

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale"></a>

```java
public java.lang.Number getScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled"></a>

```java
public java.lang.Object getIsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}.

---

##### `privateRegistryAccess`<sup>Optional</sup> <a name="privateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess"></a>

```java
public LightsailContainerServicePrivateRegistryAccess getPrivateRegistryAccess();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

private_registry_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}

---

##### `publicDomainNames`<sup>Optional</sup> <a name="publicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames"></a>

```java
public LightsailContainerServicePublicDomainNames getPublicDomainNames();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

public_domain_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts"></a>

```java
public LightsailContainerServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#timeouts LightsailContainerService#timeouts}

---

### LightsailContainerServicePrivateRegistryAccess <a name="LightsailContainerServicePrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePrivateRegistryAccess;

LightsailContainerServicePrivateRegistryAccess.builder()
//  .ecrImagePullerRole(LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole">ecrImagePullerRole</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | ecr_image_puller_role block. |

---

##### `ecrImagePullerRole`<sup>Optional</sup> <a name="ecrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole"></a>

```java
public LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole getEcrImagePullerRole();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

ecr_image_puller_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#ecr_image_puller_role LightsailContainerService#ecr_image_puller_role}

---

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole;

LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.builder()
//  .isActive(java.lang.Boolean)
//  .isActive(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}. |

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}.

---

### LightsailContainerServicePublicDomainNames <a name="LightsailContainerServicePublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePublicDomainNames;

LightsailContainerServicePublicDomainNames.builder()
    .certificate(IResolvable)
    .certificate(java.util.List<LightsailContainerServicePublicDomainNamesCertificate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate">certificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>></code> | certificate block. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate LightsailContainerService#certificate}

---

### LightsailContainerServicePublicDomainNamesCertificate <a name="LightsailContainerServicePublicDomainNamesCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePublicDomainNamesCertificate;

LightsailContainerServicePublicDomainNamesCertificate.builder()
    .certificateName(java.lang.String)
    .domainNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}. |

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}.

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}.

---

### LightsailContainerServiceTimeouts <a name="LightsailContainerServiceTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServiceTimeouts;

LightsailContainerServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference;

new LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive">resetIsActive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive"></a>

```java
public void resetIsActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">principalArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput">isActiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```java
public java.lang.String getPrincipalArn();
```

- *Type:* java.lang.String

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput"></a>

```java
public java.lang.Object getIsActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```java
public LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---


### LightsailContainerServicePrivateRegistryAccessOutputReference <a name="LightsailContainerServicePrivateRegistryAccessOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePrivateRegistryAccessOutputReference;

new LightsailContainerServicePrivateRegistryAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole">putEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole">resetEcrImagePullerRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEcrImagePullerRole` <a name="putEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole"></a>

```java
public void putEcrImagePullerRole(LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `resetEcrImagePullerRole` <a name="resetEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole"></a>

```java
public void resetEcrImagePullerRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole">ecrImagePullerRole</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput">ecrImagePullerRoleInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ecrImagePullerRole`<sup>Required</sup> <a name="ecrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```java
public LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference getEcrImagePullerRole();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `ecrImagePullerRoleInput`<sup>Optional</sup> <a name="ecrImagePullerRoleInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput"></a>

```java
public LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole getEcrImagePullerRoleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue"></a>

```java
public LightsailContainerServicePrivateRegistryAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---


### LightsailContainerServicePublicDomainNamesCertificateList <a name="LightsailContainerServicePublicDomainNamesCertificateList" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePublicDomainNamesCertificateList;

new LightsailContainerServicePublicDomainNamesCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get"></a>

```java
public LightsailContainerServicePublicDomainNamesCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>>

---


### LightsailContainerServicePublicDomainNamesCertificateOutputReference <a name="LightsailContainerServicePublicDomainNamesCertificateOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePublicDomainNamesCertificateOutputReference;

new LightsailContainerServicePublicDomainNamesCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput">domainNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `domainNamesInput`<sup>Optional</sup> <a name="domainNamesInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput"></a>

```java
public java.util.List<java.lang.String> getDomainNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a> OR com.hashicorp.cdktf.IResolvable

---


### LightsailContainerServicePublicDomainNamesOutputReference <a name="LightsailContainerServicePublicDomainNamesOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServicePublicDomainNamesOutputReference;

new LightsailContainerServicePublicDomainNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate">putCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate"></a>

```java
public void putCertificate(IResolvable OR java.util.List<LightsailContainerServicePublicDomainNamesCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput">certificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate"></a>

```java
public LightsailContainerServicePublicDomainNamesCertificateList getCertificate();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue"></a>

```java
public LightsailContainerServicePublicDomainNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---


### LightsailContainerServiceTimeoutsOutputReference <a name="LightsailContainerServiceTimeoutsOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lightsail_container_service.LightsailContainerServiceTimeoutsOutputReference;

new LightsailContainerServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



