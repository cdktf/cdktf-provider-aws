# `configOrganizationConformancePack` Submodule <a name="`configOrganizationConformancePack` Submodule" id="@cdktf/provider-aws.configOrganizationConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConformancePack <a name="ConfigOrganizationConformancePack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack aws_config_organization_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

new configOrganizationConformancePack.ConfigOrganizationConformancePack(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig">ConfigOrganizationConformancePackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig">ConfigOrganizationConformancePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter">putInputParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket">resetDeliveryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix">resetDeliveryS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetInputParameter">resetInputParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri">resetTemplateS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInputParameter` <a name="putInputParameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter"></a>

```typescript
public putInputParameter(value: IResolvable | ConfigOrganizationConformancePackInputParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts"></a>

```typescript
public putTimeouts(value: ConfigOrganizationConformancePackTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>

---

##### `resetDeliveryS3Bucket` <a name="resetDeliveryS3Bucket" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket"></a>

```typescript
public resetDeliveryS3Bucket(): void
```

##### `resetDeliveryS3KeyPrefix` <a name="resetDeliveryS3KeyPrefix" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix"></a>

```typescript
public resetDeliveryS3KeyPrefix(): void
```

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts"></a>

```typescript
public resetExcludedAccounts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputParameter` <a name="resetInputParameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetInputParameter"></a>

```typescript
public resetInputParameter(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateS3Uri` <a name="resetTemplateS3Uri" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri"></a>

```typescript
public resetTemplateS3Uri(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameter">inputParameter</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList">ConfigOrganizationConformancePackInputParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference">ConfigOrganizationConformancePackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput">deliveryS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput">deliveryS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameterInput">inputParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput">templateS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `inputParameter`<sup>Required</sup> <a name="inputParameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameter"></a>

```typescript
public readonly inputParameter: ConfigOrganizationConformancePackInputParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList">ConfigOrganizationConformancePackInputParameterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeouts"></a>

```typescript
public readonly timeouts: ConfigOrganizationConformancePackTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference">ConfigOrganizationConformancePackTimeoutsOutputReference</a>

---

##### `deliveryS3BucketInput`<sup>Optional</sup> <a name="deliveryS3BucketInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput"></a>

```typescript
public readonly deliveryS3BucketInput: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefixInput`<sup>Optional</sup> <a name="deliveryS3KeyPrefixInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput"></a>

```typescript
public readonly deliveryS3KeyPrefixInput: string;
```

- *Type:* string

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput"></a>

```typescript
public readonly excludedAccountsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputParameterInput`<sup>Optional</sup> <a name="inputParameterInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameterInput"></a>

```typescript
public readonly inputParameterInput: IResolvable | ConfigOrganizationConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateS3UriInput`<sup>Optional</sup> <a name="templateS3UriInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput"></a>

```typescript
public readonly templateS3UriInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ConfigOrganizationConformancePackTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a> | cdktf.IResolvable

---

##### `deliveryS3Bucket`<sup>Required</sup> <a name="deliveryS3Bucket" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefix`<sup>Required</sup> <a name="deliveryS3KeyPrefix" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateS3Uri`<sup>Required</sup> <a name="templateS3Uri" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConformancePackConfig <a name="ConfigOrganizationConformancePackConfig" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

const configOrganizationConformancePackConfig: configOrganizationConformancePack.ConfigOrganizationConformancePackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.inputParameter">inputParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]</code> | input_parameter block. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody">templateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}.

---

##### `deliveryS3Bucket`<sup>Optional</sup> <a name="deliveryS3Bucket" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}.

---

##### `deliveryS3KeyPrefix`<sup>Optional</sup> <a name="deliveryS3KeyPrefix" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameter`<sup>Optional</sup> <a name="inputParameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.inputParameter"></a>

```typescript
public readonly inputParameter: IResolvable | ConfigOrganizationConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]

input_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#input_parameter ConfigOrganizationConformancePack#input_parameter}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}.

---

##### `templateS3Uri`<sup>Optional</sup> <a name="templateS3Uri" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ConfigOrganizationConformancePackTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#timeouts ConfigOrganizationConformancePack#timeouts}

---

### ConfigOrganizationConformancePackInputParameter <a name="ConfigOrganizationConformancePackInputParameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

const configOrganizationConformancePackInputParameter: configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterName">parameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterValue">parameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}.

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}.

---

### ConfigOrganizationConformancePackTimeouts <a name="ConfigOrganizationConformancePackTimeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

const configOrganizationConformancePackTimeouts: configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#create ConfigOrganizationConformancePack#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delete ConfigOrganizationConformancePack#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#update ConfigOrganizationConformancePack#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#create ConfigOrganizationConformancePack#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delete ConfigOrganizationConformancePack#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#update ConfigOrganizationConformancePack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConformancePackInputParameterList <a name="ConfigOrganizationConformancePackInputParameterList" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

new configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get"></a>

```typescript
public get(index: number): ConfigOrganizationConformancePackInputParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigOrganizationConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]

---


### ConfigOrganizationConformancePackInputParameterOutputReference <a name="ConfigOrganizationConformancePackInputParameterOutputReference" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

new configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigOrganizationConformancePackInputParameter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a> | cdktf.IResolvable

---


### ConfigOrganizationConformancePackTimeoutsOutputReference <a name="ConfigOrganizationConformancePackTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/provider-aws'

new configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigOrganizationConformancePackTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a> | cdktf.IResolvable

---



