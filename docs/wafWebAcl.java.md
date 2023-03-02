# `wafWebAcl` Submodule <a name="`wafWebAcl` Submodule" id="@cdktf/provider-aws.wafWebAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafWebAcl <a name="WafWebAcl" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl aws_waf_web_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAcl;

WafWebAcl.Builder.create(Construct scope, java.lang.String id)
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
    .defaultAction(WafWebAclDefaultAction)
    .metricName(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .loggingConfiguration(WafWebAclLoggingConfiguration)
//  .rules(IResolvable)
//  .rules(java.util.List<WafWebAclRules>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#metric_name WafWebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#name WafWebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#id WafWebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags WafWebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags_all WafWebAcl#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.defaultAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#default_action WafWebAcl#default_action}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#metric_name WafWebAcl#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#name WafWebAcl#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#id WafWebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#logging_configuration WafWebAcl#logging_configuration}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>>

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#rules WafWebAcl#rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags WafWebAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags_all WafWebAcl#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.putDefaultAction">putDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDefaultAction` <a name="putDefaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putDefaultAction"></a>

```java
public void putDefaultAction(WafWebAclDefaultAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putDefaultAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putLoggingConfiguration"></a>

```java
public void putLoggingConfiguration(WafWebAclLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<WafWebAclRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetLoggingConfiguration"></a>

```java
public void resetLoggingConfiguration()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetRules"></a>

```java
public void resetRules()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAcl;

WafWebAcl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAcl;

WafWebAcl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAcl;

WafWebAcl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference">WafWebAclDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference">WafWebAclLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList">WafWebAclRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.defaultActionInput">defaultActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.defaultAction"></a>

```java
public WafWebAclDefaultActionOutputReference getDefaultAction();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference">WafWebAclDefaultActionOutputReference</a>

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.loggingConfiguration"></a>

```java
public WafWebAclLoggingConfigurationOutputReference getLoggingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference">WafWebAclLoggingConfigurationOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.rules"></a>

```java
public WafWebAclRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList">WafWebAclRulesList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.defaultActionInput"></a>

```java
public WafWebAclDefaultAction getDefaultActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.loggingConfigurationInput"></a>

```java
public WafWebAclLoggingConfiguration getLoggingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafWebAclConfig <a name="WafWebAclConfig" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclConfig;

WafWebAclConfig.builder()
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
    .defaultAction(WafWebAclDefaultAction)
    .metricName(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .loggingConfiguration(WafWebAclLoggingConfiguration)
//  .rules(IResolvable)
//  .rules(java.util.List<WafWebAclRules>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#metric_name WafWebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#name WafWebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#id WafWebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags WafWebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags_all WafWebAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.defaultAction"></a>

```java
public WafWebAclDefaultAction getDefaultAction();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#default_action WafWebAcl#default_action}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#metric_name WafWebAcl#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#name WafWebAcl#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#id WafWebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.loggingConfiguration"></a>

```java
public WafWebAclLoggingConfiguration getLoggingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#logging_configuration WafWebAcl#logging_configuration}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>>

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#rules WafWebAcl#rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags WafWebAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags_all WafWebAcl#tags_all}.

---

### WafWebAclDefaultAction <a name="WafWebAclDefaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclDefaultAction;

WafWebAclDefaultAction.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

### WafWebAclLoggingConfiguration <a name="WafWebAclLoggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclLoggingConfiguration;

WafWebAclLoggingConfiguration.builder()
    .logDestination(java.lang.String)
//  .redactedFields(WafWebAclLoggingConfigurationRedactedFields)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.property.logDestination">logDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#log_destination WafWebAcl#log_destination}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a></code> | redacted_fields block. |

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.property.logDestination"></a>

```java
public java.lang.String getLogDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#log_destination WafWebAcl#log_destination}.

---

##### `redactedFields`<sup>Optional</sup> <a name="redactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.property.redactedFields"></a>

```java
public WafWebAclLoggingConfigurationRedactedFields getRedactedFields();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a>

redacted_fields block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#redacted_fields WafWebAcl#redacted_fields}

---

### WafWebAclLoggingConfigurationRedactedFields <a name="WafWebAclLoggingConfigurationRedactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclLoggingConfigurationRedactedFields;

WafWebAclLoggingConfigurationRedactedFields.builder()
    .fieldToMatch(IResolvable)
    .fieldToMatch(java.util.List<WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields.property.fieldToMatch">fieldToMatch</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>></code> | field_to_match block. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields.property.fieldToMatch"></a>

```java
public java.lang.Object getFieldToMatch();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#field_to_match WafWebAcl#field_to_match}

---

### WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch <a name="WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch;

WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.builder()
    .type(java.lang.String)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#data WafWebAcl#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#data WafWebAcl#data}.

---

### WafWebAclRules <a name="WafWebAclRules" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclRules;

WafWebAclRules.builder()
    .priority(java.lang.Number)
    .ruleId(java.lang.String)
//  .action(WafWebAclRulesAction)
//  .overrideAction(WafWebAclRulesOverrideAction)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#priority WafWebAcl#priority}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#rule_id WafWebAcl#rule_id}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.overrideAction">overrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a></code> | override_action block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#priority WafWebAcl#priority}.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#rule_id WafWebAcl#rule_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.action"></a>

```java
public WafWebAclRulesAction getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#action WafWebAcl#action}

---

##### `overrideAction`<sup>Optional</sup> <a name="overrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.overrideAction"></a>

```java
public WafWebAclRulesOverrideAction getOverrideAction();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a>

override_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#override_action WafWebAcl#override_action}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

### WafWebAclRulesAction <a name="WafWebAclRulesAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclRulesAction;

WafWebAclRulesAction.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

### WafWebAclRulesOverrideAction <a name="WafWebAclRulesOverrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclRulesOverrideAction;

WafWebAclRulesOverrideAction.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafWebAclDefaultActionOutputReference <a name="WafWebAclDefaultActionOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclDefaultActionOutputReference;

new WafWebAclDefaultActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.internalValue"></a>

```java
public WafWebAclDefaultAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

---


### WafWebAclLoggingConfigurationOutputReference <a name="WafWebAclLoggingConfigurationOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclLoggingConfigurationOutputReference;

new WafWebAclLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.putRedactedFields">putRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resetRedactedFields">resetRedactedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRedactedFields` <a name="putRedactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.putRedactedFields"></a>

```java
public void putRedactedFields(WafWebAclLoggingConfigurationRedactedFields value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.putRedactedFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a>

---

##### `resetRedactedFields` <a name="resetRedactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resetRedactedFields"></a>

```java
public void resetRedactedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference">WafWebAclLoggingConfigurationRedactedFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.logDestinationInput">logDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.redactedFieldsInput">redactedFieldsInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.logDestination">logDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redactedFields`<sup>Required</sup> <a name="redactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.redactedFields"></a>

```java
public WafWebAclLoggingConfigurationRedactedFieldsOutputReference getRedactedFields();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference">WafWebAclLoggingConfigurationRedactedFieldsOutputReference</a>

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.logDestinationInput"></a>

```java
public java.lang.String getLogDestinationInput();
```

- *Type:* java.lang.String

---

##### `redactedFieldsInput`<sup>Optional</sup> <a name="redactedFieldsInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.redactedFieldsInput"></a>

```java
public WafWebAclLoggingConfigurationRedactedFields getRedactedFieldsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a>

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.logDestination"></a>

```java
public java.lang.String getLogDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public WafWebAclLoggingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

---


### WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList <a name="WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList;

new WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get"></a>

```java
public WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>>

---


### WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference <a name="WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference;

new WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a> OR com.hashicorp.cdktf.IResolvable

---


### WafWebAclLoggingConfigurationRedactedFieldsOutputReference <a name="WafWebAclLoggingConfigurationRedactedFieldsOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference;

new WafWebAclLoggingConfigurationRedactedFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch"></a>

```java
public void putFieldToMatch(IResolvable OR java.util.List<WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatch"></a>

```java
public WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList getFieldToMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatchInput"></a>

```java
public java.lang.Object getFieldToMatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```java
public WafWebAclLoggingConfigurationRedactedFields getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a>

---


### WafWebAclRulesActionOutputReference <a name="WafWebAclRulesActionOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclRulesActionOutputReference;

new WafWebAclRulesActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.internalValue"></a>

```java
public WafWebAclRulesAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a>

---


### WafWebAclRulesList <a name="WafWebAclRulesList" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclRulesList;

new WafWebAclRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.get"></a>

```java
public WafWebAclRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>>

---


### WafWebAclRulesOutputReference <a name="WafWebAclRulesOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclRulesOutputReference;

new WafWebAclRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putOverrideAction">putOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetOverrideAction">resetOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putAction"></a>

```java
public void putAction(WafWebAclRulesAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a>

---

##### `putOverrideAction` <a name="putOverrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putOverrideAction"></a>

```java
public void putOverrideAction(WafWebAclRulesOverrideAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetOverrideAction` <a name="resetOverrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetOverrideAction"></a>

```java
public void resetOverrideAction()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference">WafWebAclRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.overrideAction">overrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference">WafWebAclRulesOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.overrideActionInput">overrideActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.action"></a>

```java
public WafWebAclRulesActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference">WafWebAclRulesActionOutputReference</a>

---

##### `overrideAction`<sup>Required</sup> <a name="overrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.overrideAction"></a>

```java
public WafWebAclRulesOverrideActionOutputReference getOverrideAction();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference">WafWebAclRulesOverrideActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.actionInput"></a>

```java
public WafWebAclRulesAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a>

---

##### `overrideActionInput`<sup>Optional</sup> <a name="overrideActionInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.overrideActionInput"></a>

```java
public WafWebAclRulesOverrideAction getOverrideActionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a> OR com.hashicorp.cdktf.IResolvable

---


### WafWebAclRulesOverrideActionOutputReference <a name="WafWebAclRulesOverrideActionOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_web_acl.WafWebAclRulesOverrideActionOutputReference;

new WafWebAclRulesOverrideActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.internalValue"></a>

```java
public WafWebAclRulesOverrideAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a>

---



