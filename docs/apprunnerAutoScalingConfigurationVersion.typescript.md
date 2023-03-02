# `apprunnerAutoScalingConfigurationVersion` Submodule <a name="`apprunnerAutoScalingConfigurationVersion` Submodule" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerAutoScalingConfigurationVersion <a name="ApprunnerAutoScalingConfigurationVersion" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version aws_apprunner_auto_scaling_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer"></a>

```typescript
import { apprunnerAutoScalingConfigurationVersion } from '@cdktf/provider-aws'

new apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion(scope: Construct, id: string, config: ApprunnerAutoScalingConfigurationVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig">ApprunnerAutoScalingConfigurationVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig">ApprunnerAutoScalingConfigurationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMaxConcurrency"></a>

```typescript
public resetMaxConcurrency(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isConstruct"></a>

```typescript
import { apprunnerAutoScalingConfigurationVersion } from '@cdktf/provider-aws'

apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformElement"></a>

```typescript
import { apprunnerAutoScalingConfigurationVersion } from '@cdktf/provider-aws'

apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformResource"></a>

```typescript
import { apprunnerAutoScalingConfigurationVersion } from '@cdktf/provider-aws'

apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationRevision">autoScalingConfigurationRevision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.latest">latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationNameInput">autoScalingConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationName">autoScalingConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoScalingConfigurationRevision`<sup>Required</sup> <a name="autoScalingConfigurationRevision" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationRevision"></a>

```typescript
public readonly autoScalingConfigurationRevision: number;
```

- *Type:* number

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.latest"></a>

```typescript
public readonly latest: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `autoScalingConfigurationNameInput`<sup>Optional</sup> <a name="autoScalingConfigurationNameInput" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationNameInput"></a>

```typescript
public readonly autoScalingConfigurationNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxConcurrencyInput"></a>

```typescript
public readonly maxConcurrencyInput: number;
```

- *Type:* number

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoScalingConfigurationName`<sup>Required</sup> <a name="autoScalingConfigurationName" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.autoScalingConfigurationName"></a>

```typescript
public readonly autoScalingConfigurationName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerAutoScalingConfigurationVersionConfig <a name="ApprunnerAutoScalingConfigurationVersionConfig" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.Initializer"></a>

```typescript
import { apprunnerAutoScalingConfigurationVersion } from '@cdktf/provider-aws'

const apprunnerAutoScalingConfigurationVersionConfig: apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.autoScalingConfigurationName">autoScalingConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#id ApprunnerAutoScalingConfigurationVersion#id}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_size ApprunnerAutoScalingConfigurationVersion#max_size}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#min_size ApprunnerAutoScalingConfigurationVersion#min_size}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags ApprunnerAutoScalingConfigurationVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoScalingConfigurationName`<sup>Required</sup> <a name="autoScalingConfigurationName" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.autoScalingConfigurationName"></a>

```typescript
public readonly autoScalingConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#id ApprunnerAutoScalingConfigurationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#max_size ApprunnerAutoScalingConfigurationVersion#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#min_size ApprunnerAutoScalingConfigurationVersion#min_size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags ApprunnerAutoScalingConfigurationVersion#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apprunnerAutoScalingConfigurationVersion.ApprunnerAutoScalingConfigurationVersionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}.

---



