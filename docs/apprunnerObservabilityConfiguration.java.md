# `apprunnerObservabilityConfiguration` Submodule <a name="`apprunnerObservabilityConfiguration` Submodule" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerObservabilityConfiguration <a name="ApprunnerObservabilityConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration aws_apprunner_observability_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_observability_configuration.ApprunnerObservabilityConfiguration;

ApprunnerObservabilityConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .observabilityConfigurationName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .traceConfiguration(ApprunnerObservabilityConfigurationTraceConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.observabilityConfigurationName">observabilityConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.traceConfiguration">traceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | trace_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `observabilityConfigurationName`<sup>Required</sup> <a name="observabilityConfigurationName" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.observabilityConfigurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}.

---

##### `traceConfiguration`<sup>Optional</sup> <a name="traceConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.traceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

trace_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration">putTraceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTraceConfiguration">resetTraceConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTraceConfiguration` <a name="putTraceConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration"></a>

```java
public void putTraceConfiguration(ApprunnerObservabilityConfigurationTraceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTraceConfiguration` <a name="resetTraceConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTraceConfiguration"></a>

```java
public void resetTraceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_observability_configuration.ApprunnerObservabilityConfiguration;

ApprunnerObservabilityConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_observability_configuration.ApprunnerObservabilityConfiguration;

ApprunnerObservabilityConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_observability_configuration.ApprunnerObservabilityConfiguration;

ApprunnerObservabilityConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.latest">latest</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision">observabilityConfigurationRevision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfiguration">traceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference">ApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationNameInput">observabilityConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfigurationInput">traceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationName">observabilityConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.latest"></a>

```java
public IResolvable getLatest();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `observabilityConfigurationRevision`<sup>Required</sup> <a name="observabilityConfigurationRevision" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision"></a>

```java
public java.lang.Number getObservabilityConfigurationRevision();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `traceConfiguration`<sup>Required</sup> <a name="traceConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfiguration"></a>

```java
public ApprunnerObservabilityConfigurationTraceConfigurationOutputReference getTraceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference">ApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `observabilityConfigurationNameInput`<sup>Optional</sup> <a name="observabilityConfigurationNameInput" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationNameInput"></a>

```java
public java.lang.String getObservabilityConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `traceConfigurationInput`<sup>Optional</sup> <a name="traceConfigurationInput" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfigurationInput"></a>

```java
public ApprunnerObservabilityConfigurationTraceConfiguration getTraceConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `observabilityConfigurationName`<sup>Required</sup> <a name="observabilityConfigurationName" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationName"></a>

```java
public java.lang.String getObservabilityConfigurationName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerObservabilityConfigurationConfig <a name="ApprunnerObservabilityConfigurationConfig" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_observability_configuration.ApprunnerObservabilityConfigurationConfig;

ApprunnerObservabilityConfigurationConfig.builder()
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
    .observabilityConfigurationName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .traceConfiguration(ApprunnerObservabilityConfigurationTraceConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.observabilityConfigurationName">observabilityConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.traceConfiguration">traceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | trace_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `observabilityConfigurationName`<sup>Required</sup> <a name="observabilityConfigurationName" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.observabilityConfigurationName"></a>

```java
public java.lang.String getObservabilityConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}.

---

##### `traceConfiguration`<sup>Optional</sup> <a name="traceConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.traceConfiguration"></a>

```java
public ApprunnerObservabilityConfigurationTraceConfiguration getTraceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

trace_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}

---

### ApprunnerObservabilityConfigurationTraceConfiguration <a name="ApprunnerObservabilityConfigurationTraceConfiguration" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_observability_configuration.ApprunnerObservabilityConfigurationTraceConfiguration;

ApprunnerObservabilityConfigurationTraceConfiguration.builder()
//  .vendor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.property.vendor">vendor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}. |

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerObservabilityConfigurationTraceConfigurationOutputReference <a name="ApprunnerObservabilityConfigurationTraceConfigurationOutputReference" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_observability_configuration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference;

new ApprunnerObservabilityConfigurationTraceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resetVendor">resetVendor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVendor` <a name="resetVendor" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resetVendor"></a>

```java
public void resetVendor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendorInput">vendorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vendorInput`<sup>Optional</sup> <a name="vendorInput" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendorInput"></a>

```java
public java.lang.String getVendorInput();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue"></a>

```java
public ApprunnerObservabilityConfigurationTraceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---



