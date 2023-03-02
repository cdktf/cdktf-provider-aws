# `networkmanagerCoreNetwork` Submodule <a name="`networkmanagerCoreNetwork` Submodule" id="@cdktf/provider-aws.networkmanagerCoreNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetwork <a name="NetworkmanagerCoreNetwork" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network aws_networkmanager_core_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetwork;

NetworkmanagerCoreNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .globalNetworkId(java.lang.String)
//  .basePolicyRegion(java.lang.String)
//  .createBasePolicy(java.lang.Boolean)
//  .createBasePolicy(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .policyDocument(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkmanagerCoreNetworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.basePolicyRegion">basePolicyRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.createBasePolicy">createBasePolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.globalNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}.

---

##### `basePolicyRegion`<sup>Optional</sup> <a name="basePolicyRegion" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.basePolicyRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}.

---

##### `createBasePolicy`<sup>Optional</sup> <a name="createBasePolicy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.createBasePolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.policyDocument"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#timeouts NetworkmanagerCoreNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetBasePolicyRegion">resetBasePolicyRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetCreateBasePolicy">resetCreateBasePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts"></a>

```java
public void putTimeouts(NetworkmanagerCoreNetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>

---

##### `resetBasePolicyRegion` <a name="resetBasePolicyRegion" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetBasePolicyRegion"></a>

```java
public void resetBasePolicyRegion()
```

##### `resetCreateBasePolicy` <a name="resetCreateBasePolicy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetCreateBasePolicy"></a>

```java
public void resetCreateBasePolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetPolicyDocument"></a>

```java
public void resetPolicyDocument()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetwork;

NetworkmanagerCoreNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetwork;

NetworkmanagerCoreNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetwork;

NetworkmanagerCoreNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.edges">edges</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList">NetworkmanagerCoreNetworkEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.segments">segments</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList">NetworkmanagerCoreNetworkSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference">NetworkmanagerCoreNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegionInput">basePolicyRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicyInput">createBasePolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocumentInput">policyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegion">basePolicyRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicy">createBasePolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `edges`<sup>Required</sup> <a name="edges" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.edges"></a>

```java
public NetworkmanagerCoreNetworkEdgesList getEdges();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList">NetworkmanagerCoreNetworkEdgesList</a>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.segments"></a>

```java
public NetworkmanagerCoreNetworkSegmentsList getSegments();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList">NetworkmanagerCoreNetworkSegmentsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeouts"></a>

```java
public NetworkmanagerCoreNetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference">NetworkmanagerCoreNetworkTimeoutsOutputReference</a>

---

##### `basePolicyRegionInput`<sup>Optional</sup> <a name="basePolicyRegionInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegionInput"></a>

```java
public java.lang.String getBasePolicyRegionInput();
```

- *Type:* java.lang.String

---

##### `createBasePolicyInput`<sup>Optional</sup> <a name="createBasePolicyInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicyInput"></a>

```java
public java.lang.Object getCreateBasePolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkIdInput"></a>

```java
public java.lang.String getGlobalNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocumentInput"></a>

```java
public java.lang.String getPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `basePolicyRegion`<sup>Required</sup> <a name="basePolicyRegion" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegion"></a>

```java
public java.lang.String getBasePolicyRegion();
```

- *Type:* java.lang.String

---

##### `createBasePolicy`<sup>Required</sup> <a name="createBasePolicy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicy"></a>

```java
public java.lang.Object getCreateBasePolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkConfig <a name="NetworkmanagerCoreNetworkConfig" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkConfig;

NetworkmanagerCoreNetworkConfig.builder()
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
    .globalNetworkId(java.lang.String)
//  .basePolicyRegion(java.lang.String)
//  .createBasePolicy(java.lang.Boolean)
//  .createBasePolicy(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .policyDocument(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkmanagerCoreNetworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.basePolicyRegion">basePolicyRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.createBasePolicy">createBasePolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}.

---

##### `basePolicyRegion`<sup>Optional</sup> <a name="basePolicyRegion" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.basePolicyRegion"></a>

```java
public java.lang.String getBasePolicyRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}.

---

##### `createBasePolicy`<sup>Optional</sup> <a name="createBasePolicy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.createBasePolicy"></a>

```java
public java.lang.Object getCreateBasePolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.timeouts"></a>

```java
public NetworkmanagerCoreNetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#timeouts NetworkmanagerCoreNetwork#timeouts}

---

### NetworkmanagerCoreNetworkEdges <a name="NetworkmanagerCoreNetworkEdges" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkEdges;

NetworkmanagerCoreNetworkEdges.builder()
    .build();
```


### NetworkmanagerCoreNetworkSegments <a name="NetworkmanagerCoreNetworkSegments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkSegments;

NetworkmanagerCoreNetworkSegments.builder()
    .build();
```


### NetworkmanagerCoreNetworkTimeouts <a name="NetworkmanagerCoreNetworkTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkTimeouts;

NetworkmanagerCoreNetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create NetworkmanagerCoreNetwork#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#delete NetworkmanagerCoreNetwork#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#update NetworkmanagerCoreNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create NetworkmanagerCoreNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#delete NetworkmanagerCoreNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#update NetworkmanagerCoreNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCoreNetworkEdgesList <a name="NetworkmanagerCoreNetworkEdgesList" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkEdgesList;

new NetworkmanagerCoreNetworkEdgesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get"></a>

```java
public NetworkmanagerCoreNetworkEdgesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkmanagerCoreNetworkEdgesOutputReference <a name="NetworkmanagerCoreNetworkEdgesOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkEdgesOutputReference;

new NetworkmanagerCoreNetworkEdgesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation">edgeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges">NetworkmanagerCoreNetworkEdges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation"></a>

```java
public java.lang.String getEdgeLocation();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue"></a>

```java
public NetworkmanagerCoreNetworkEdges getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges">NetworkmanagerCoreNetworkEdges</a>

---


### NetworkmanagerCoreNetworkSegmentsList <a name="NetworkmanagerCoreNetworkSegmentsList" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkSegmentsList;

new NetworkmanagerCoreNetworkSegmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get"></a>

```java
public NetworkmanagerCoreNetworkSegmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkmanagerCoreNetworkSegmentsOutputReference <a name="NetworkmanagerCoreNetworkSegmentsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkSegmentsOutputReference;

new NetworkmanagerCoreNetworkSegmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations">edgeLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments">sharedSegments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments">NetworkmanagerCoreNetworkSegments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations"></a>

```java
public java.util.List<java.lang.String> getEdgeLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sharedSegments`<sup>Required</sup> <a name="sharedSegments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments"></a>

```java
public java.util.List<java.lang.String> getSharedSegments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue"></a>

```java
public NetworkmanagerCoreNetworkSegments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments">NetworkmanagerCoreNetworkSegments</a>

---


### NetworkmanagerCoreNetworkTimeoutsOutputReference <a name="NetworkmanagerCoreNetworkTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.networkmanager_core_network.NetworkmanagerCoreNetworkTimeoutsOutputReference;

new NetworkmanagerCoreNetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



