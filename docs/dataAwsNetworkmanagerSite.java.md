# `dataAwsNetworkmanagerSite` Submodule <a name="`dataAwsNetworkmanagerSite` Submodule" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkmanagerSite <a name="DataAwsNetworkmanagerSite" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site aws_networkmanager_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_networkmanager_site.DataAwsNetworkmanagerSite;

DataAwsNetworkmanagerSite.Builder.create(Construct scope, java.lang.String id)
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
    .siteId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#global_network_id DataAwsNetworkmanagerSite#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#site_id DataAwsNetworkmanagerSite#site_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#id DataAwsNetworkmanagerSite#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#tags DataAwsNetworkmanagerSite#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.globalNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#global_network_id DataAwsNetworkmanagerSite#global_network_id}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#site_id DataAwsNetworkmanagerSite#site_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#id DataAwsNetworkmanagerSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#tags DataAwsNetworkmanagerSite#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_networkmanager_site.DataAwsNetworkmanagerSite;

DataAwsNetworkmanagerSite.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_networkmanager_site.DataAwsNetworkmanagerSite;

DataAwsNetworkmanagerSite.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_networkmanager_site.DataAwsNetworkmanagerSite;

DataAwsNetworkmanagerSite.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList">DataAwsNetworkmanagerSiteLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.location"></a>

```java
public DataAwsNetworkmanagerSiteLocationList getLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList">DataAwsNetworkmanagerSiteLocationList</a>

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.globalNetworkIdInput"></a>

```java
public java.lang.String getGlobalNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkmanagerSiteConfig <a name="DataAwsNetworkmanagerSiteConfig" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_networkmanager_site.DataAwsNetworkmanagerSiteConfig;

DataAwsNetworkmanagerSiteConfig.builder()
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
    .siteId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#global_network_id DataAwsNetworkmanagerSite#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#site_id DataAwsNetworkmanagerSite#site_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#id DataAwsNetworkmanagerSite#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#tags DataAwsNetworkmanagerSite#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#global_network_id DataAwsNetworkmanagerSite#global_network_id}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#site_id DataAwsNetworkmanagerSite#site_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#id DataAwsNetworkmanagerSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#tags DataAwsNetworkmanagerSite#tags}.

---

### DataAwsNetworkmanagerSiteLocation <a name="DataAwsNetworkmanagerSiteLocation" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_networkmanager_site.DataAwsNetworkmanagerSiteLocation;

DataAwsNetworkmanagerSiteLocation.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkmanagerSiteLocationList <a name="DataAwsNetworkmanagerSiteLocationList" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_networkmanager_site.DataAwsNetworkmanagerSiteLocationList;

new DataAwsNetworkmanagerSiteLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.get"></a>

```java
public DataAwsNetworkmanagerSiteLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsNetworkmanagerSiteLocationOutputReference <a name="DataAwsNetworkmanagerSiteLocationOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_networkmanager_site.DataAwsNetworkmanagerSiteLocationOutputReference;

new DataAwsNetworkmanagerSiteLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.latitude">latitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.longitude">longitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocation">DataAwsNetworkmanagerSiteLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.latitude"></a>

```java
public java.lang.String getLatitude();
```

- *Type:* java.lang.String

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.longitude"></a>

```java
public java.lang.String getLongitude();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.internalValue"></a>

```java
public DataAwsNetworkmanagerSiteLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocation">DataAwsNetworkmanagerSiteLocation</a>

---



