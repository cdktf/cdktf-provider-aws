# `serviceDiscoveryHttpNamespace` Submodule <a name="`serviceDiscoveryHttpNamespace` Submodule" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryHttpNamespace <a name="ServiceDiscoveryHttpNamespace" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace aws_service_discovery_http_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.service_discovery_http_namespace.ServiceDiscoveryHttpNamespace;

ServiceDiscoveryHttpNamespace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#name ServiceDiscoveryHttpNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#description ServiceDiscoveryHttpNamespace#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#id ServiceDiscoveryHttpNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#tags ServiceDiscoveryHttpNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#tags_all ServiceDiscoveryHttpNamespace#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#name ServiceDiscoveryHttpNamespace#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#description ServiceDiscoveryHttpNamespace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#id ServiceDiscoveryHttpNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#region ServiceDiscoveryHttpNamespace#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#tags ServiceDiscoveryHttpNamespace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#tags_all ServiceDiscoveryHttpNamespace#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceDiscoveryHttpNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.service_discovery_http_namespace.ServiceDiscoveryHttpNamespace;

ServiceDiscoveryHttpNamespace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.service_discovery_http_namespace.ServiceDiscoveryHttpNamespace;

ServiceDiscoveryHttpNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.service_discovery_http_namespace.ServiceDiscoveryHttpNamespace;

ServiceDiscoveryHttpNamespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.service_discovery_http_namespace.ServiceDiscoveryHttpNamespace;

ServiceDiscoveryHttpNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceDiscoveryHttpNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceDiscoveryHttpNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceDiscoveryHttpNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceDiscoveryHttpNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceDiscoveryHttpNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.httpName">httpName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `httpName`<sup>Required</sup> <a name="httpName" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.httpName"></a>

```java
public java.lang.String getHttpName();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryHttpNamespaceConfig <a name="ServiceDiscoveryHttpNamespaceConfig" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.service_discovery_http_namespace.ServiceDiscoveryHttpNamespaceConfig;

ServiceDiscoveryHttpNamespaceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#name ServiceDiscoveryHttpNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#description ServiceDiscoveryHttpNamespace#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#id ServiceDiscoveryHttpNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#tags ServiceDiscoveryHttpNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#tags_all ServiceDiscoveryHttpNamespace#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#name ServiceDiscoveryHttpNamespace#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#description ServiceDiscoveryHttpNamespace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#id ServiceDiscoveryHttpNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#region ServiceDiscoveryHttpNamespace#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#tags ServiceDiscoveryHttpNamespace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/service_discovery_http_namespace#tags_all ServiceDiscoveryHttpNamespace#tags_all}.

---



