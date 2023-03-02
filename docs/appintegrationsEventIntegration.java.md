# `appintegrationsEventIntegration` Submodule <a name="`appintegrationsEventIntegration` Submodule" id="@cdktf/provider-aws.appintegrationsEventIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsEventIntegration <a name="AppintegrationsEventIntegration" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration aws_appintegrations_event_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_event_integration.AppintegrationsEventIntegration;

AppintegrationsEventIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .eventbridgeBus(java.lang.String)
    .eventFilter(AppintegrationsEventIntegrationEventFilter)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.eventbridgeBus">eventbridgeBus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.eventFilter">eventFilter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | event_filter block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventbridgeBus`<sup>Required</sup> <a name="eventbridgeBus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.eventbridgeBus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}.

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.eventFilter"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

event_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter">putEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEventFilter` <a name="putEventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter"></a>

```java
public void putEventFilter(AppintegrationsEventIntegrationEventFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_event_integration.AppintegrationsEventIntegration;

AppintegrationsEventIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_event_integration.AppintegrationsEventIntegration;

AppintegrationsEventIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_event_integration.AppintegrationsEventIntegration;

AppintegrationsEventIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBusInput">eventbridgeBusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput">eventFilterInput</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBus">eventbridgeBus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter"></a>

```java
public AppintegrationsEventIntegrationEventFilterOutputReference getEventFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventbridgeBusInput`<sup>Optional</sup> <a name="eventbridgeBusInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBusInput"></a>

```java
public java.lang.String getEventbridgeBusInput();
```

- *Type:* java.lang.String

---

##### `eventFilterInput`<sup>Optional</sup> <a name="eventFilterInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput"></a>

```java
public AppintegrationsEventIntegrationEventFilter getEventFilterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eventbridgeBus`<sup>Required</sup> <a name="eventbridgeBus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBus"></a>

```java
public java.lang.String getEventbridgeBus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsEventIntegrationConfig <a name="AppintegrationsEventIntegrationConfig" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_event_integration.AppintegrationsEventIntegrationConfig;

AppintegrationsEventIntegrationConfig.builder()
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
    .eventbridgeBus(java.lang.String)
    .eventFilter(AppintegrationsEventIntegrationEventFilter)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventbridgeBus">eventbridgeBus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | event_filter block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventbridgeBus`<sup>Required</sup> <a name="eventbridgeBus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventbridgeBus"></a>

```java
public java.lang.String getEventbridgeBus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}.

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter"></a>

```java
public AppintegrationsEventIntegrationEventFilter getEventFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

event_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}.

---

### AppintegrationsEventIntegrationEventFilter <a name="AppintegrationsEventIntegrationEventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_event_integration.AppintegrationsEventIntegrationEventFilter;

AppintegrationsEventIntegrationEventFilter.builder()
    .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsEventIntegrationEventFilterOutputReference <a name="AppintegrationsEventIntegrationEventFilterOutputReference" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_event_integration.AppintegrationsEventIntegrationEventFilterOutputReference;

new AppintegrationsEventIntegrationEventFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue"></a>

```java
public AppintegrationsEventIntegrationEventFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---



