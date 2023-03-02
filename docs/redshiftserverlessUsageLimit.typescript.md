# `redshiftserverlessUsageLimit` Submodule <a name="`redshiftserverlessUsageLimit` Submodule" id="@cdktf/provider-aws.redshiftserverlessUsageLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessUsageLimit <a name="RedshiftserverlessUsageLimit" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit aws_redshiftserverless_usage_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.Initializer"></a>

```typescript
import { redshiftserverlessUsageLimit } from '@cdktf/provider-aws'

new redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit(scope: Construct, id: string, config: RedshiftserverlessUsageLimitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig">RedshiftserverlessUsageLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig">RedshiftserverlessUsageLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.resetBreachAction">resetBreachAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBreachAction` <a name="resetBreachAction" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.resetBreachAction"></a>

```typescript
public resetBreachAction(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isConstruct"></a>

```typescript
import { redshiftserverlessUsageLimit } from '@cdktf/provider-aws'

redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isTerraformElement"></a>

```typescript
import { redshiftserverlessUsageLimit } from '@cdktf/provider-aws'

redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isTerraformResource"></a>

```typescript
import { redshiftserverlessUsageLimit } from '@cdktf/provider-aws'

redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.breachActionInput">breachActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.usageTypeInput">usageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.breachAction">breachAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.usageType">usageType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `breachActionInput`<sup>Optional</sup> <a name="breachActionInput" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.breachActionInput"></a>

```typescript
public readonly breachActionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `usageTypeInput`<sup>Optional</sup> <a name="usageTypeInput" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.usageTypeInput"></a>

```typescript
public readonly usageTypeInput: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `breachAction`<sup>Required</sup> <a name="breachAction" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.breachAction"></a>

```typescript
public readonly breachAction: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `usageType`<sup>Required</sup> <a name="usageType" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessUsageLimitConfig <a name="RedshiftserverlessUsageLimitConfig" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.Initializer"></a>

```typescript
import { redshiftserverlessUsageLimit } from '@cdktf/provider-aws'

const redshiftserverlessUsageLimitConfig: redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.amount">amount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#amount RedshiftserverlessUsageLimit#amount}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#resource_arn RedshiftserverlessUsageLimit#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.usageType">usageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#usage_type RedshiftserverlessUsageLimit#usage_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.breachAction">breachAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#breach_action RedshiftserverlessUsageLimit#breach_action}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#id RedshiftserverlessUsageLimit#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#period RedshiftserverlessUsageLimit#period}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#amount RedshiftserverlessUsageLimit#amount}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#resource_arn RedshiftserverlessUsageLimit#resource_arn}.

---

##### `usageType`<sup>Required</sup> <a name="usageType" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#usage_type RedshiftserverlessUsageLimit#usage_type}.

---

##### `breachAction`<sup>Optional</sup> <a name="breachAction" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.breachAction"></a>

```typescript
public readonly breachAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#breach_action RedshiftserverlessUsageLimit#breach_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#id RedshiftserverlessUsageLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-aws.redshiftserverlessUsageLimit.RedshiftserverlessUsageLimitConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#period RedshiftserverlessUsageLimit#period}.

---



