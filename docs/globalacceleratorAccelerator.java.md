# `globalacceleratorAccelerator` Submodule <a name="`globalacceleratorAccelerator` Submodule" id="@cdktf/provider-aws.globalacceleratorAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorAccelerator <a name="GlobalacceleratorAccelerator" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator aws_globalaccelerator_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.Builder.create(Construct scope, java.lang.String id)
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
//  .attributes(GlobalacceleratorAcceleratorAttributes)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .ipAddressType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GlobalacceleratorAcceleratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#id GlobalacceleratorAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags_all GlobalacceleratorAccelerator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#attributes GlobalacceleratorAccelerator#attributes}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#id GlobalacceleratorAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.ipAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags_all GlobalacceleratorAccelerator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#timeouts GlobalacceleratorAccelerator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes"></a>

```java
public void putAttributes(GlobalacceleratorAcceleratorAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts"></a>

```java
public void putTimeouts(GlobalacceleratorAcceleratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference">GlobalacceleratorAcceleratorAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipSets">ipSets</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList">GlobalacceleratorAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference">GlobalacceleratorAcceleratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributesInput">attributesInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributes"></a>

```java
public GlobalacceleratorAcceleratorAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference">GlobalacceleratorAcceleratorAttributesOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `ipSets`<sup>Required</sup> <a name="ipSets" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipSets"></a>

```java
public GlobalacceleratorAcceleratorIpSetsList getIpSets();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList">GlobalacceleratorAcceleratorIpSetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeouts"></a>

```java
public GlobalacceleratorAcceleratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference">GlobalacceleratorAcceleratorTimeoutsOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributesInput"></a>

```java
public GlobalacceleratorAcceleratorAttributes getAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorAcceleratorAttributes <a name="GlobalacceleratorAcceleratorAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAcceleratorAttributes;

GlobalacceleratorAcceleratorAttributes.builder()
//  .flowLogsEnabled(java.lang.Boolean)
//  .flowLogsEnabled(IResolvable)
//  .flowLogsS3Bucket(java.lang.String)
//  .flowLogsS3Prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsEnabled">flowLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}. |

---

##### `flowLogsEnabled`<sup>Optional</sup> <a name="flowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsEnabled"></a>

```java
public java.lang.Object getFlowLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}.

---

##### `flowLogsS3Bucket`<sup>Optional</sup> <a name="flowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Bucket"></a>

```java
public java.lang.String getFlowLogsS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}.

---

##### `flowLogsS3Prefix`<sup>Optional</sup> <a name="flowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Prefix"></a>

```java
public java.lang.String getFlowLogsS3Prefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}.

---

### GlobalacceleratorAcceleratorConfig <a name="GlobalacceleratorAcceleratorConfig" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAcceleratorConfig;

GlobalacceleratorAcceleratorConfig.builder()
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
//  .attributes(GlobalacceleratorAcceleratorAttributes)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .ipAddressType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GlobalacceleratorAcceleratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#id GlobalacceleratorAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags_all GlobalacceleratorAccelerator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.attributes"></a>

```java
public GlobalacceleratorAcceleratorAttributes getAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#attributes GlobalacceleratorAccelerator#attributes}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#id GlobalacceleratorAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags_all GlobalacceleratorAccelerator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.timeouts"></a>

```java
public GlobalacceleratorAcceleratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#timeouts GlobalacceleratorAccelerator#timeouts}

---

### GlobalacceleratorAcceleratorIpSets <a name="GlobalacceleratorAcceleratorIpSets" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAcceleratorIpSets;

GlobalacceleratorAcceleratorIpSets.builder()
    .build();
```


### GlobalacceleratorAcceleratorTimeouts <a name="GlobalacceleratorAcceleratorTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAcceleratorTimeouts;

GlobalacceleratorAcceleratorTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#create GlobalacceleratorAccelerator#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#update GlobalacceleratorAccelerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#create GlobalacceleratorAccelerator#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#update GlobalacceleratorAccelerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorAcceleratorAttributesOutputReference <a name="GlobalacceleratorAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAcceleratorAttributesOutputReference;

new GlobalacceleratorAcceleratorAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsEnabled">resetFlowLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket">resetFlowLogsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix">resetFlowLogsS3Prefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowLogsEnabled` <a name="resetFlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsEnabled"></a>

```java
public void resetFlowLogsEnabled()
```

##### `resetFlowLogsS3Bucket` <a name="resetFlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket"></a>

```java
public void resetFlowLogsS3Bucket()
```

##### `resetFlowLogsS3Prefix` <a name="resetFlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix"></a>

```java
public void resetFlowLogsS3Prefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabledInput">flowLogsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput">flowLogsS3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput">flowLogsS3PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled">flowLogsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowLogsEnabledInput`<sup>Optional</sup> <a name="flowLogsEnabledInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabledInput"></a>

```java
public java.lang.Object getFlowLogsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `flowLogsS3BucketInput`<sup>Optional</sup> <a name="flowLogsS3BucketInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput"></a>

```java
public java.lang.String getFlowLogsS3BucketInput();
```

- *Type:* java.lang.String

---

##### `flowLogsS3PrefixInput`<sup>Optional</sup> <a name="flowLogsS3PrefixInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput"></a>

```java
public java.lang.String getFlowLogsS3PrefixInput();
```

- *Type:* java.lang.String

---

##### `flowLogsEnabled`<sup>Required</sup> <a name="flowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```java
public java.lang.Object getFlowLogsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `flowLogsS3Bucket`<sup>Required</sup> <a name="flowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```java
public java.lang.String getFlowLogsS3Bucket();
```

- *Type:* java.lang.String

---

##### `flowLogsS3Prefix`<sup>Required</sup> <a name="flowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```java
public java.lang.String getFlowLogsS3Prefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue"></a>

```java
public GlobalacceleratorAcceleratorAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---


### GlobalacceleratorAcceleratorIpSetsList <a name="GlobalacceleratorAcceleratorIpSetsList" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAcceleratorIpSetsList;

new GlobalacceleratorAcceleratorIpSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get"></a>

```java
public GlobalacceleratorAcceleratorIpSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GlobalacceleratorAcceleratorIpSetsOutputReference <a name="GlobalacceleratorAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAcceleratorIpSetsOutputReference;

new GlobalacceleratorAcceleratorIpSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily">ipFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets">GlobalacceleratorAcceleratorIpSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipFamily`<sup>Required</sup> <a name="ipFamily" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```java
public java.lang.String getIpFamily();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue"></a>

```java
public GlobalacceleratorAcceleratorIpSets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets">GlobalacceleratorAcceleratorIpSets</a>

---


### GlobalacceleratorAcceleratorTimeoutsOutputReference <a name="GlobalacceleratorAcceleratorTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_accelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference;

new GlobalacceleratorAcceleratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



