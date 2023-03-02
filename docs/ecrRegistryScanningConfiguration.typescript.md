# `ecrRegistryScanningConfiguration` Submodule <a name="`ecrRegistryScanningConfiguration` Submodule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRegistryScanningConfiguration <a name="EcrRegistryScanningConfiguration" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration aws_ecr_registry_scanning_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration(scope: Construct, id: string, config: EcrRegistryScanningConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig">EcrRegistryScanningConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig">EcrRegistryScanningConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule"></a>

```typescript
public putRule(value: IResolvable | EcrRegistryScanningConfigurationRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetRule"></a>

```typescript
public resetRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList">EcrRegistryScanningConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput">scanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType">scanType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rule"></a>

```typescript
public readonly rule: EcrRegistryScanningConfigurationRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList">EcrRegistryScanningConfigurationRuleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | EcrRegistryScanningConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>[]

---

##### `scanTypeInput`<sup>Optional</sup> <a name="scanTypeInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput"></a>

```typescript
public readonly scanTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scanType`<sup>Required</sup> <a name="scanType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType"></a>

```typescript
public readonly scanType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRegistryScanningConfigurationConfig <a name="EcrRegistryScanningConfigurationConfig" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

const ecrRegistryScanningConfigurationConfig: ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType">scanType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>[]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scanType`<sup>Required</sup> <a name="scanType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType"></a>

```typescript
public readonly scanType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | EcrRegistryScanningConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#rule EcrRegistryScanningConfiguration#rule}

---

### EcrRegistryScanningConfigurationRule <a name="EcrRegistryScanningConfigurationRule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

const ecrRegistryScanningConfigurationRule: ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.repositoryFilter">repositoryFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>[]</code> | repository_filter block. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.scanFrequency">scanFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}. |

---

##### `repositoryFilter`<sup>Required</sup> <a name="repositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.repositoryFilter"></a>

```typescript
public readonly repositoryFilter: IResolvable | EcrRegistryScanningConfigurationRuleRepositoryFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>[]

repository_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#repository_filter EcrRegistryScanningConfiguration#repository_filter}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}.

---

### EcrRegistryScanningConfigurationRuleRepositoryFilter <a name="EcrRegistryScanningConfigurationRuleRepositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

const ecrRegistryScanningConfigurationRuleRepositoryFilter: ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filterType">filterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}.

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRegistryScanningConfigurationRuleList <a name="EcrRegistryScanningConfigurationRuleList" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get"></a>

```typescript
public get(index: number): EcrRegistryScanningConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRegistryScanningConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>[]

---


### EcrRegistryScanningConfigurationRuleOutputReference <a name="EcrRegistryScanningConfigurationRuleOutputReference" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter">putRepositoryFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepositoryFilter` <a name="putRepositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter"></a>

```typescript
public putRepositoryFilter(value: IResolvable | EcrRegistryScanningConfigurationRuleRepositoryFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilter">repositoryFilter</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList">EcrRegistryScanningConfigurationRuleRepositoryFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilterInput">repositoryFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequency">scanFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryFilter`<sup>Required</sup> <a name="repositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilter"></a>

```typescript
public readonly repositoryFilter: EcrRegistryScanningConfigurationRuleRepositoryFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList">EcrRegistryScanningConfigurationRuleRepositoryFilterList</a>

---

##### `repositoryFilterInput`<sup>Optional</sup> <a name="repositoryFilterInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilterInput"></a>

```typescript
public readonly repositoryFilterInput: IResolvable | EcrRegistryScanningConfigurationRuleRepositoryFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>[]

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequencyInput"></a>

```typescript
public readonly scanFrequencyInput: string;
```

- *Type:* string

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequency"></a>

```typescript
public readonly scanFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcrRegistryScanningConfigurationRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a> | cdktf.IResolvable

---


### EcrRegistryScanningConfigurationRuleRepositoryFilterList <a name="EcrRegistryScanningConfigurationRuleRepositoryFilterList" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get"></a>

```typescript
public get(index: number): EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRegistryScanningConfigurationRuleRepositoryFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>[]

---


### EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference <a name="EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer"></a>

```typescript
import { ecrRegistryScanningConfiguration } from '@cdktf/provider-aws'

new ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcrRegistryScanningConfigurationRuleRepositoryFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a> | cdktf.IResolvable

---



