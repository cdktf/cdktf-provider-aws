# `apiGatewayMethodSettings` Submodule <a name="`apiGatewayMethodSettings` Submodule" id="@cdktf/provider-aws.apiGatewayMethodSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethodSettings <a name="ApiGatewayMethodSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings aws_api_gateway_method_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer"></a>

```typescript
import { apiGatewayMethodSettings } from '@cdktf/provider-aws'

new apiGatewayMethodSettings.ApiGatewayMethodSettings(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig">ApiGatewayMethodSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig">ApiGatewayMethodSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings"></a>

```typescript
public putSettings(value: ApiGatewayMethodSettingsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct"></a>

```typescript
import { apiGatewayMethodSettings } from '@cdktf/provider-aws'

apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement"></a>

```typescript
import { apiGatewayMethodSettings } from '@cdktf/provider-aws'

apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource"></a>

```typescript
import { apiGatewayMethodSettings } from '@cdktf/provider-aws'

apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference">ApiGatewayMethodSettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPathInput">methodPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageNameInput">stageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPath">methodPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settings"></a>

```typescript
public readonly settings: ApiGatewayMethodSettingsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference">ApiGatewayMethodSettingsSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `methodPathInput`<sup>Optional</sup> <a name="methodPathInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPathInput"></a>

```typescript
public readonly methodPathInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settingsInput"></a>

```typescript
public readonly settingsInput: ApiGatewayMethodSettingsSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageNameInput"></a>

```typescript
public readonly stageNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `methodPath`<sup>Required</sup> <a name="methodPath" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPath"></a>

```typescript
public readonly methodPath: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodSettingsConfig <a name="ApiGatewayMethodSettingsConfig" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.Initializer"></a>

```typescript
import { apiGatewayMethodSettings } from '@cdktf/provider-aws'

const apiGatewayMethodSettingsConfig: apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.methodPath">methodPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.stageName">stageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `methodPath`<sup>Required</sup> <a name="methodPath" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.methodPath"></a>

```typescript
public readonly methodPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.settings"></a>

```typescript
public readonly settings: ApiGatewayMethodSettingsSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#settings ApiGatewayMethodSettings#settings}

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayMethodSettingsSettings <a name="ApiGatewayMethodSettingsSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.Initializer"></a>

```typescript
import { apiGatewayMethodSettings } from '@cdktf/provider-aws'

const apiGatewayMethodSettingsSettings: apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cachingEnabled">cachingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.requireAuthorizationForCacheControl">requireAuthorizationForCacheControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.unauthorizedCacheControlHeaderStrategy">unauthorizedCacheControlHeaderStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}. |

---

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="cacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}.

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="cacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}.

---

##### `cachingEnabled`<sup>Optional</sup> <a name="cachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}.

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}.

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}.

---

##### `requireAuthorizationForCacheControl`<sup>Optional</sup> <a name="requireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.requireAuthorizationForCacheControl"></a>

```typescript
public readonly requireAuthorizationForCacheControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}.

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}.

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}.

---

##### `unauthorizedCacheControlHeaderStrategy`<sup>Optional</sup> <a name="unauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.unauthorizedCacheControlHeaderStrategy"></a>

```typescript
public readonly unauthorizedCacheControlHeaderStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayMethodSettingsSettingsOutputReference <a name="ApiGatewayMethodSettingsSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayMethodSettings } from '@cdktf/provider-aws'

new apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheDataEncrypted">resetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheTtlInSeconds">resetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCachingEnabled">resetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetRequireAuthorizationForCacheControl">resetRequireAuthorizationForCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetUnauthorizedCacheControlHeaderStrategy">resetUnauthorizedCacheControlHeaderStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheDataEncrypted` <a name="resetCacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheDataEncrypted"></a>

```typescript
public resetCacheDataEncrypted(): void
```

##### `resetCacheTtlInSeconds` <a name="resetCacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheTtlInSeconds"></a>

```typescript
public resetCacheTtlInSeconds(): void
```

##### `resetCachingEnabled` <a name="resetCachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCachingEnabled"></a>

```typescript
public resetCachingEnabled(): void
```

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetDataTraceEnabled"></a>

```typescript
public resetDataTraceEnabled(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetMetricsEnabled"></a>

```typescript
public resetMetricsEnabled(): void
```

##### `resetRequireAuthorizationForCacheControl` <a name="resetRequireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetRequireAuthorizationForCacheControl"></a>

```typescript
public resetRequireAuthorizationForCacheControl(): void
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingBurstLimit"></a>

```typescript
public resetThrottlingBurstLimit(): void
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingRateLimit"></a>

```typescript
public resetThrottlingRateLimit(): void
```

##### `resetUnauthorizedCacheControlHeaderStrategy` <a name="resetUnauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetUnauthorizedCacheControlHeaderStrategy"></a>

```typescript
public resetUnauthorizedCacheControlHeaderStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncryptedInput">cacheDataEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSecondsInput">cacheTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabledInput">cachingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControlInput">requireAuthorizationForCacheControlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategyInput">unauthorizedCacheControlHeaderStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControl">requireAuthorizationForCacheControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategy">unauthorizedCacheControlHeaderStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheDataEncryptedInput`<sup>Optional</sup> <a name="cacheDataEncryptedInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```typescript
public readonly cacheDataEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheTtlInSecondsInput`<sup>Optional</sup> <a name="cacheTtlInSecondsInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```typescript
public readonly cacheTtlInSecondsInput: number;
```

- *Type:* number

---

##### `cachingEnabledInput`<sup>Optional</sup> <a name="cachingEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabledInput"></a>

```typescript
public readonly cachingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabledInput"></a>

```typescript
public readonly dataTraceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabledInput"></a>

```typescript
public readonly metricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireAuthorizationForCacheControlInput`<sup>Optional</sup> <a name="requireAuthorizationForCacheControlInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControlInput"></a>

```typescript
public readonly requireAuthorizationForCacheControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```typescript
public readonly throttlingBurstLimitInput: number;
```

- *Type:* number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimitInput"></a>

```typescript
public readonly throttlingRateLimitInput: number;
```

- *Type:* number

---

##### `unauthorizedCacheControlHeaderStrategyInput`<sup>Optional</sup> <a name="unauthorizedCacheControlHeaderStrategyInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategyInput"></a>

```typescript
public readonly unauthorizedCacheControlHeaderStrategyInput: string;
```

- *Type:* string

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireAuthorizationForCacheControl`<sup>Required</sup> <a name="requireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControl"></a>

```typescript
public readonly requireAuthorizationForCacheControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `unauthorizedCacheControlHeaderStrategy`<sup>Required</sup> <a name="unauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategy"></a>

```typescript
public readonly unauthorizedCacheControlHeaderStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayMethodSettingsSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---



