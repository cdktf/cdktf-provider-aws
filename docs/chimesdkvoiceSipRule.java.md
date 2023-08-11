# `aws_chimesdkvoice_sip_rule`

Refer to the Terraform Registory for docs: [`aws_chimesdkvoice_sip_rule`](https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule).

# `chimesdkvoiceSipRule` Submodule <a name="`chimesdkvoiceSipRule` Submodule" id="@cdktf/provider-aws.chimesdkvoiceSipRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceSipRule <a name="ChimesdkvoiceSipRule" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule aws_chimesdkvoice_sip_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_rule.ChimesdkvoiceSipRule;

ChimesdkvoiceSipRule.Builder.create(Construct scope, java.lang.String id)
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
    .targetApplications(IResolvable)
    .targetApplications(java.util.List<ChimesdkvoiceSipRuleTargetApplications>)
    .triggerType(java.lang.String)
    .triggerValue(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.targetApplications">targetApplications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>></code> | target_applications block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.triggerType">triggerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.triggerValue">triggerValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}.

---

##### `targetApplications`<sup>Required</sup> <a name="targetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.targetApplications"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>>

target_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#target_applications ChimesdkvoiceSipRule#target_applications}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.triggerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}.

---

##### `triggerValue`<sup>Required</sup> <a name="triggerValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.triggerValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications">putTargetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTargetApplications` <a name="putTargetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications"></a>

```java
public void putTargetApplications(IResolvable OR java.util.List<ChimesdkvoiceSipRuleTargetApplications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_rule.ChimesdkvoiceSipRule;

ChimesdkvoiceSipRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_rule.ChimesdkvoiceSipRule;

ChimesdkvoiceSipRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_rule.ChimesdkvoiceSipRule;

ChimesdkvoiceSipRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplications">targetApplications</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList">ChimesdkvoiceSipRuleTargetApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplicationsInput">targetApplicationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerTypeInput">triggerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValueInput">triggerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerType">triggerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValue">triggerValue</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetApplications`<sup>Required</sup> <a name="targetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplications"></a>

```java
public ChimesdkvoiceSipRuleTargetApplicationsList getTargetApplications();
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList">ChimesdkvoiceSipRuleTargetApplicationsList</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetApplicationsInput`<sup>Optional</sup> <a name="targetApplicationsInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplicationsInput"></a>

```java
public java.lang.Object getTargetApplicationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>>

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerTypeInput"></a>

```java
public java.lang.String getTriggerTypeInput();
```

- *Type:* java.lang.String

---

##### `triggerValueInput`<sup>Optional</sup> <a name="triggerValueInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValueInput"></a>

```java
public java.lang.String getTriggerValueInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerType"></a>

```java
public java.lang.String getTriggerType();
```

- *Type:* java.lang.String

---

##### `triggerValue`<sup>Required</sup> <a name="triggerValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValue"></a>

```java
public java.lang.String getTriggerValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceSipRuleConfig <a name="ChimesdkvoiceSipRuleConfig" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_rule.ChimesdkvoiceSipRuleConfig;

ChimesdkvoiceSipRuleConfig.builder()
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
    .targetApplications(IResolvable)
    .targetApplications(java.util.List<ChimesdkvoiceSipRuleTargetApplications>)
    .triggerType(java.lang.String)
    .triggerValue(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.targetApplications">targetApplications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>></code> | target_applications block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerType">triggerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerValue">triggerValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}.

---

##### `targetApplications`<sup>Required</sup> <a name="targetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.targetApplications"></a>

```java
public java.lang.Object getTargetApplications();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>>

target_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#target_applications ChimesdkvoiceSipRule#target_applications}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerType"></a>

```java
public java.lang.String getTriggerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}.

---

##### `triggerValue`<sup>Required</sup> <a name="triggerValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerValue"></a>

```java
public java.lang.String getTriggerValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimesdkvoiceSipRuleTargetApplications <a name="ChimesdkvoiceSipRuleTargetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_rule.ChimesdkvoiceSipRuleTargetApplications;

ChimesdkvoiceSipRuleTargetApplications.builder()
    .awsRegion(java.lang.String)
    .priority(java.lang.Number)
    .sipMediaApplicationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#aws_region ChimesdkvoiceSipRule#aws_region}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#priority ChimesdkvoiceSipRule#priority}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.sipMediaApplicationId">sipMediaApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#sip_media_application_id ChimesdkvoiceSipRule#sip_media_application_id}. |

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#aws_region ChimesdkvoiceSipRule#aws_region}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#priority ChimesdkvoiceSipRule#priority}.

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="sipMediaApplicationId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.sipMediaApplicationId"></a>

```java
public java.lang.String getSipMediaApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/chimesdkvoice_sip_rule#sip_media_application_id ChimesdkvoiceSipRule#sip_media_application_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceSipRuleTargetApplicationsList <a name="ChimesdkvoiceSipRuleTargetApplicationsList" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_rule.ChimesdkvoiceSipRuleTargetApplicationsList;

new ChimesdkvoiceSipRuleTargetApplicationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get"></a>

```java
public ChimesdkvoiceSipRuleTargetApplicationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>>

---


### ChimesdkvoiceSipRuleTargetApplicationsOutputReference <a name="ChimesdkvoiceSipRuleTargetApplicationsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chimesdkvoice_sip_rule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference;

new ChimesdkvoiceSipRuleTargetApplicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationIdInput">sipMediaApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationId">sipMediaApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `sipMediaApplicationIdInput`<sup>Optional</sup> <a name="sipMediaApplicationIdInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationIdInput"></a>

```java
public java.lang.String getSipMediaApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="sipMediaApplicationId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationId"></a>

```java
public java.lang.String getSipMediaApplicationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>

---



